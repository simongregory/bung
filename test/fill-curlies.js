import test from 'ava';
import sinon from 'sinon';

import { fillCurlies } from '../';

test('replaces a {key} with a value', t => {
  t.is(fillCurlies('a{b}c', { b: 'z' }), 'azc');
  t.is(fillCurlies('a{{b1}}c', { b1: 'B' }), 'a{B}c');
});

test('ignores {keys} with no contents', t => {
  t.is(fillCurlies('a{}c', {}), 'a{}c');
});

test('fills urls with values', t => {
  t.is(fillCurlies('http://some.mothers/{do}/have/em', { do: 'DO' }),
            'http://some.mothers/DO/have/em');

  t.is(fillCurlies('http://some.{a}/{b}/{c}/{d}',
            { a: 'mothers', b: 'do', c: 'have', d: 'em' }),
            'http://some.mothers/do/have/em');
});

test('warns when a {key} has no value supplied', t => {
  const spy = sinon.spy(console, 'warn');

  t.is(fillCurlies('a{z}c', {}), 'a{z}c');
  t.true(spy.calledWith('Template filler supplied with no value for key "%s"', 'z'));

  console.warn.restore();
});

test.after.always(() => {
  if (typeof console.warn.restore === 'function') {
    console.warn.restore();
  }
});
