import test from 'ava';
import { toJS, toJSStrict } from '../lib/xml-to-js';

test('converts xml to, erm, a js object', async t => {
  t.deepEqual(await toJS('<x>ml</x>'), { x: 'ml' });
});

test('converts nothing to null', async t => {
  t.is(await toJS(''), null);
});

test('throws errors with bad input', async t => {
  await t.throwsAsync(toJS('<bad></bbad>'), {
    message: /Unexpected close tag/
  });
});

test('strictly converts xml to, erm, a js object', async t => {
  t.deepEqual(await toJSStrict('<x>ml</x>'), { x: 'ml' });
});

test('strictly converts slightly complex xml to a js object', async t => {
  t.deepEqual(await toJSStrict('<x><m>l</m><m>l</m></x>'), { x: { m: ['l', 'l'] } });
});
