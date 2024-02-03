// CJSを使ってモジュールを読み込む場合を練習する

let { plus, minus, multi, division } = require('./common');

let result = plus(1, 2);
result = minus(1, 2);
result = multi(2, 4);
result = division(16, 4);
console.log(result);

// pathを書いてみた
let path = require('path');
// console.log(path.resolve(__dirname));
