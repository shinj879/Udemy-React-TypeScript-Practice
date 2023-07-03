/* eslint-disable @typescript-eslint/no-unused-vars */

/** TypeScriptの基本の型 */

// boolean
let bool: boolean = true;
// 基本は変数の後ろに:を付けて型を指定する

// number 数値
let num: number = 0;

// string 文字
let str: string = "A";

// Array 配列
let arr1: Array<number> = [0, 1, 2];
// 配列は２通りある。↑の方が読みやすいらしい。
let arr2: number[] = [0, 1, 2];

// tuple
let tuple: [number, string] = [0, "A"];
//配列だけど、中身の型がそれぞれ違う場合の話。あまり使わない。

// any
let any1: any = false;
//どんな型を入れてもエラーにならない。

// void
const funcA = (): void => {
  const test = "TEST";
};
/*関数に使う型。何も返却していないという型になる。
ただ、TypeSCriptは内部で型を推測し、あてはめてくれるからあえて書く必要もない。**/

// null
let null1: null = null;

// undefined
let undefined1: undefined = undefined;
//undifinedは、javascriptで何も設定されていないことを表す。

//object
let obf1: object = {};
let obf2: { id: number; name: string } = { id: 0, name: "a" };
//オブジェクトのプロパティの型を指定している。propsなどで結構使うみたい
