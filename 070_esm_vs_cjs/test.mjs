// import c from './test.cjs';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

//console.log(import.meta.url);

const require = createRequire(import.meta.url);
//console.log(require);
const q = fileURLToPath(import.meta.url);

//const jsonObj = require('./sample.json');

// 2 (Node 19 Experimental)
import jsonObj from './sample.json' assert { type: 'json' };

console.log(jsonObj);

console.log(globalThis);
