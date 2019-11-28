import test from 'ava';
import { ropeyDateToEpoch } from '..';

test('recognises hours am', t => {
  t.is(ropeyDateToEpoch('8am 19 Mar 2014'), 1395216000000);
  t.is(ropeyDateToEpoch('0am 5 May 2015'), 1430784000000);
  t.is(ropeyDateToEpoch('11am 5 May 2015'), 1430823600000);
});

test('recognises hours pm', t => {
  t.is(ropeyDateToEpoch('7pm 3 May 2015'), 1430679600000);
  t.is(ropeyDateToEpoch('12pm 5 May 2015'), 1430827200000);
});

test('recognises hours mins am', t => {
  t.is(ropeyDateToEpoch('0:01am 29 Apr 2015'), 1430265660000);
  t.is(ropeyDateToEpoch('11:59am 29 Apr 2015'), 1430308740000);
});

test('recognises hours mins pm', t => {
  t.is(ropeyDateToEpoch('4:01pm 29 Apr 2015'), 1430323260000);
  t.is(ropeyDateToEpoch('4:45pm 29 Apr 2015'), 1430325900000);
  t.is(ropeyDateToEpoch('4:59pm 29 Apr 2015'), 1430326740000);
  t.is(ropeyDateToEpoch('11:59pm 29 Apr 2015'), 1430351940000);
});

test('converts days', t => {
  t.is(ropeyDateToEpoch('1 Jan 1970'), 0);
  t.is(ropeyDateToEpoch('2 Jan 1970'), 1000 * 60 * 60 * 24);

  t.is(new Date(ropeyDateToEpoch('29 Jan 2015')).getUTCDate(), 29);
  t.is(new Date(ropeyDateToEpoch('31 Dec 2099')).getUTCDate(), 31);
});

test('converts months', t => {
  t.is(new Date(ropeyDateToEpoch('1 Jan 1970')).getUTCMonth(), 0);
  t.is(new Date(ropeyDateToEpoch('1 Feb 1972')).getUTCMonth(), 1);
  t.is(new Date(ropeyDateToEpoch('1 Mar 1973')).getUTCMonth(), 2);
  t.is(new Date(ropeyDateToEpoch('1 Apr 1974')).getUTCMonth(), 3);
  t.is(new Date(ropeyDateToEpoch('1 May 1975')).getUTCMonth(), 4);
  t.is(new Date(ropeyDateToEpoch('1 Jun 1976')).getUTCMonth(), 5);
  t.is(new Date(ropeyDateToEpoch('1 Jul 1977')).getUTCMonth(), 6);
  t.is(new Date(ropeyDateToEpoch('1 Aug 1978')).getUTCMonth(), 7);
  t.is(new Date(ropeyDateToEpoch('1 Sep 1979')).getUTCMonth(), 8);
  t.is(new Date(ropeyDateToEpoch('1 Oct 1980')).getUTCMonth(), 9);
  t.is(new Date(ropeyDateToEpoch('1 Nov 1981')).getUTCMonth(), 10);
  t.is(new Date(ropeyDateToEpoch('1 Dec 1982')).getUTCMonth(), 11);
});

test('converts years', t => {
  t.is(new Date(ropeyDateToEpoch('15 Aug 1984')).getUTCFullYear(), 1984);
  t.is(new Date(ropeyDateToEpoch('10 Sep 2001')).getUTCFullYear(), 2001);
  t.is(new Date(ropeyDateToEpoch('31 Jan 2015')).getUTCFullYear(), 2015);
});

test('recognises months only', t => {
  t.is(new Date(ropeyDateToEpoch('Aug 1984')).getUTCFullYear(), 1984);
  t.is(new Date(ropeyDateToEpoch('Aug 1984')).getUTCMonth(), 7);

  t.is(new Date(ropeyDateToEpoch('Sep 2001')).getUTCFullYear(), 2001);
  t.is(new Date(ropeyDateToEpoch('Sep 2001')).getUTCMonth(), 8);

  t.is(new Date(ropeyDateToEpoch('Jan 2015')).getUTCFullYear(), 2015);
  t.is(new Date(ropeyDateToEpoch('Jan 2015')).getUTCMonth(), 0);
});

test('recognises years only', t => {
  t.is(new Date(ropeyDateToEpoch('1970')).getUTCFullYear(), 1970);
  t.is(new Date(ropeyDateToEpoch('2001')).getUTCFullYear(), 2001);
  t.is(new Date(ropeyDateToEpoch('2015')).getUTCFullYear(), 2015);
});

test('rolls days forwards', t => {
  t.is(new Date(ropeyDateToEpoch('35 Dec 14')).getUTCDate(), 4);
  t.is(new Date(ropeyDateToEpoch('35 Dec 14')).getUTCMonth(), 0);
  t.is(new Date(ropeyDateToEpoch('35 Dec 14')).getUTCFullYear(), 1915);
});

test('converts two digit years to nineteen hundreds', t => {
  t.is(new Date(ropeyDateToEpoch('1 Dec 14')).getUTCFullYear(), 1914);
  t.is(new Date(ropeyDateToEpoch('1 Jan 99')).getUTCFullYear(), 1999);
});
