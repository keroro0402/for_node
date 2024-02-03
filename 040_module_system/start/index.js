// CJSを使ってモジュールを読み込む場合を練習する

let { plus, minus } = require('./common');

let result = plus(1, 2);
console.log(result);
result = minus(1, 2);
console.log(result);
