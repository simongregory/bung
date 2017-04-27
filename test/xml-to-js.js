import test from 'ava';
import toJS from '../lib/xml-to-js';

test('converts xml to, erm, a js object', async t => {
  t.deepEqual(await toJS('<x>ml</x>'), { x: 'ml' });
});

test('converts nothing to null', async t => {
  t.deepEqual(await toJS(''), null);
});

test('throws errors with bad input', async t => {
  await t.throws(toJS('<bad></bbad>'), /Error: Unexpected close tag/);
});
