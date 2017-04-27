# bung

[![Build Status: Linux](https://travis-ci.org/simongregory/bung.svg?branch=master]](https://travis-ci.org/simongregory/bung)

Random methods awaiting a proper home.

## Install

  `yarn add bung`

## Usage

      import { toJS, fillCurlies, getDayAbbrName } from 'bung';
      
      toJS('<x>ml</x>');                        // { x:'ml' }
      fillCurlies('a{z}c', {z:'b'});            // 'abc'
      getDayAbbrName(new Date(0).getUTCDay());  // 'Thu'
