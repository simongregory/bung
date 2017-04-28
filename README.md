# bung

[![Build Status](https://travis-ci.org/simongregory/bung.svg?branch=master)](https://travis-ci.org/simongregory/bung) [![Windows Build Status](https://ci.appveyor.com/api/projects/status/github/simongregory/bung?branch=master&svg=true)](https://ci.appveyor.com/project/SimonGregory/bung)

Random methods awaiting a proper home.

## Install

  `yarn add bung`

## Usage

      import { toJS, fillCurlies, getDayAbbrName } from 'bung';
      
      toJS('<x>ml</x>');                        // { x:'ml' }
      fillCurlies('a{z}c', {z:'b'});            // 'abc'
      getDayAbbrName(new Date(0).getUTCDay());  // 'Thu'
