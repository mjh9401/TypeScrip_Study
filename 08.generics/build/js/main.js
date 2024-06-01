"use strict";
// Boolean
let boolean;
let falseBoolean = false;
// Nubmer
let number;
let integer = 6;
let float = 6.233;
//String
let string;
let firstName = 'John';
// Array
// 한 가지 타입만 가지는 배열
let name1 = ['John', 'kim'];
let name2 = ['John', 'kim'];
// 여러 타입을 가지는 배열(유니언 타입 사용)
let array1 = ['John', 1, 2];
let array2 = ['John', 1, 2];
// 여러 타입을 단언 X
let someArray = ['John', 1, [], {}, false];
// Interface, Type
// 읽기 전용 배열 생성(readonly, ReadonlyArray)
let stringArray = ['A', 'B', 'C'];
let numberArray = [1, 2];
// stringArray.push('c');
// numberArray[0] = 3;
// tuple
let tuple1;
tuple1 = ['a', 1];
// tuple1 = ['a',1,2];
// tuple1 = [1,'a'];
let users;
users = [[1, 'john'], [2, 'jf']];
let tuple2;
tuple2 = ['a', 1];
tuple2.push(2);
console.log(tuple2);
