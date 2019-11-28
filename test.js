import test from 'ava';
import { bung } from '.';

test('it\'s a bung', t => {
  t.is(bung(), 'just bung it there for now...');
});
