// import _ from '../lib/lodash.js'; //npmを使わなかった記述
import _ from 'lodash'; // npm を使った記述

/**
 * npm の利点
 * １：使いたいモジュールやライブラリを一個一個、ダウンロードして階層に配置する手間が省ける
 */

const original = { prop: { nested: 'value' } };
// オブジェクトの複製
const o = { ...original };
const cloned = _.cloneDeep(original);
console.log(cloned, cloned === original);
console.log(o, o === original);
