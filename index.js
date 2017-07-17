#!/usr/bin/env node

'use strict';

const readline = require('readline');
const prettyPrint = require('./lib/prettyPrint');
let geval;
global.matrix = require('matrix-js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  geval = eval;
  prettyPrint(geval(line));
  rl.prompt();
});

rl.prompt();
