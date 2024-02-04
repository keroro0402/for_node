// 拡張子をmjsにする利点：package.jsonにESMを明示しなくてもCJSで管理されたモジュールが読み込むことが出来る。
// 拡張子をmjsにしない場合、ESMを使うには必ずpackage.jsonにtypeプロパティでmoduleを記載しないと使えないので注意！！

import * as SEX from './esm.mjs'; // ESMで読みこむ
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
