// import _ from '../lib/lodash.js'; //npmを使わなかった記述
//import _ from 'lodash'; // npm を使った記述

// import _ from '../lib/lodash.js';
// import _ from '../lib/lodash.js';

// import _ from '../lib/lodash.js';

// const obj = { name: '斉藤ななみ', age: 42 };
// const cloned = _.cloneDeep(obj); // 中身は同じでも異なるobjを作成する
// console.log(obj === cloned);

// const obj2 = { name: 'やまもん', no: '3141' };
// const cloned2 = { ...obj2 };
// cloned2.name = 'ちんげ';
// console.log(obj2);
// console.log(cloned2);

// console.log(obj2 === cloned2);

// console.log(_);

/*
import _ from "lodash"
import _ from "lodash"
import _ from "lodash"
import _ from "../lib/lodash.js"

*/

/**
 * npm の利点
 * １：使いたいモジュールやライブラリを一個一個、ダウンロードして階層に配置する手間が省ける
 */

// const original = { prop: { nested: 'value' } };
// // オブジェクトの複製
// const o = { ...original };
// const cloned = _.cloneDeep(original);
// console.log(cloned, cloned === original);
// console.log(o, o === original);

import _ from 'lodash';

// console.log(_);
const obj = { name: '斉藤ななみ', age: 43, nobbies: '玉乗り' };

const cloned = _.cloneDeep(obj);

console.log(cloned);
