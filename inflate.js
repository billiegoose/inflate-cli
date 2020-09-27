#!/usr/bin/env node

// I may regret supporting a command line argument.
var input = (process.argv.length > 2)
  ? require('fs').createReadStream(process.argv[2])
  : process.stdin;

input.pipe(require('zlib').createInflate()).pipe(process.stdout);
