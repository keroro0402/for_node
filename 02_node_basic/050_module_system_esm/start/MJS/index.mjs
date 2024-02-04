// mjsではインポートする側にはimportを書く
import { sa } from './cal.mjs';
import { da } from './cal.mjs';
import { fa } from './cal.mjs';
import de from './cal.mjs';

import f, * as QW from './cal.mjs'; // 一度に複数のimportする時の記述は * as 任意OBJ名　from "./xxxx.mjs"とする

console.log(QW);

QW.sa();

QW.da();

QW.fa();

de();
