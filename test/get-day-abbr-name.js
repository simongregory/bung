import test from 'ava';
import { getDayAbbrName } from '..';

test('sunday', t => {
  t.is(getDayAbbrName(0), 'Sun');
});

test('monday', t => {
  t.is(getDayAbbrName(1), 'Mon');
});

test('tuesday', t => {
  t.is(getDayAbbrName(2), 'Tue');
});

test('wednesday', t => {
  t.is(getDayAbbrName(3), 'Wed');
});

test('thursday', t => {
  t.is(getDayAbbrName(4), 'Thu');
});

test('friday', t => {
  t.is(getDayAbbrName(5), 'Fri');
});

test('saturday', t => {
  t.is(getDayAbbrName(6), 'Sat');
});

test('january the first 1970', t => {
  t.is(getDayAbbrName(new Date(0).getUTCDay()), 'Thu');
});
