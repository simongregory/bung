# bung

[![Build Status](https://travis-ci.org/simongregory/bung.svg?branch=master)](https://travis-ci.org/simongregory/bung) [![Windows Build Status](https://ci.appveyor.com/api/projects/status/github/simongregory/bung?branch=master&svg=true)](https://ci.appveyor.com/project/SimonGregory/bung) [![Coverage Status](https://coveralls.io/repos/github/simongregory/bung/badge.svg?branch=master)](https://coveralls.io/github/simongregory/bung?branch=master)

Random methods awaiting a proper home.

## Install

  `yarn add bung`

## Usage

      import { toJS, fillCurlies, getDayAbbrName, ropeyDateToEpoch } from 'bung';
      
      await toJS('<x>ml</x>');                  // { x:'ml' }
      fillCurlies('a{z}c', {z:'b'});            // 'abc'
      getDayAbbrName(new Date(0).getUTCDay());  // 'Thu'
      ropeyDateToEpoch('1 Jan 1970');           // 0
