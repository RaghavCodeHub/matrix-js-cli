#!/usr/bin/env node

'use strict';

global.matrix = require('matrix-js');
const readline = require('readline');
const prettyPrint = require('./lib/prettyPrint');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let geval;

rl.on('line', (line) => {
  geval = eval;
  prettyPrint(geval(line));
  rl.prompt();
});

rl.prompt();
