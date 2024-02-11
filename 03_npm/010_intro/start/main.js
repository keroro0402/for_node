const cloneDeep = require('lodash/cloneDeep');

const obj = { name: '大場つぐみ', age: 43 };
const cloned = cloneDeep(obj);

console.log(cloned);
