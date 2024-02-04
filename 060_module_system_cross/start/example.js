import * as SEX from './esm.js'; // ESMで読みこむ
import { Chi } from './calc.cjs'; // CJSで書かれたモジュールもimportで読み込める！！
/* require（CJS）では読み込めない！！！ので、使うなよ！！！ */
/**
 * CJSで管理されたモジュールはESMからimportで読み込むことが出来る
 * ESMで管理されたモジュールはCJSでは読み込めない！！（requireが使えないのである）
 */

let { one, two } = SEX;
console.log(Chi());

console.log(one('ESM1です。'));
console.log(two('ESM2です。'));
