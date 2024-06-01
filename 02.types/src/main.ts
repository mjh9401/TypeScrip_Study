// Boolean
let boolean : boolean;
let falseBoolean : boolean = false;

// Nubmer
let number : number;
let integer : number = 6;
let float : number = 6.233;

//String
let string : string;
let firstName : string = 'John';

// Array
// 한 가지 타입만 가지는 배열
let name1 : string[] = ['John','kim'];
let name2 : Array<string> = ['John','kim'];

// 여러 타입을 가지는 배열(유니언 타입 사용)
let array1: (string | number)[]= ['John',1,2];
let array2: Array<string | number>= ['John',1,2];

// 여러 타입을 단언 X
let someArray : any[] = ['John',1,[],{},false];

// Interface, Type


// 읽기 전용 배열 생성(readonly, ReadonlyArray)
let stringArray : readonly string [] = ['A','B','C'];
let numberArray : ReadonlyArray<number> = [1,2];

// stringArray.push('c');
// numberArray[0] = 3;

// tuple
let tuple1 :[string,number];
tuple1 = ['a',1];
// tuple1 = ['a',1,2];
// tuple1 = [1,'a'];

let users : [number,string][];
users =[[1,'john'],[2,'jf']];

let tuple2 : [string,number];
tuple2 = ['a',1];
tuple2.push(2);
console.log(tuple2);

// any
let any : any ='abc';
any = 1;
any = [];

// unknown
let unknown :unknown = 123;
let string1 :string  = unknown;
let string2 :string  = unknown as string;

// Object
let obj : Object = {};
let arr : Object = [];
let nul : Object = null;
let data : Object = new Date();

const obj1 : {id:number, title : string, description:string} ={
    id : 1,
    title : 'title1',
    description : 'description'
}

// Union
let union : (string | number)
union = 'hi';
union = 123;
union = [];

// function
let func1:(arg1 : number, arg2:number) => number;
func1 = function(x,y){
    return x*y;
}


let func2 : () => void;
func2 = function(){
    console.log('hi')
}

// Null, undefined
let number1 : number = undefined;
let string9 : string = null;
let object : {a : 10, b: false} = undefined;
let array : any[] = null;
let undefined1 : undefined = null;

let void1 :void = undefined;

// void
function greeting() : void{
    console.log('hi')
}

const hi : void = greeting();
console.log(hi) // undefined

// never
function throwError() : never{
    throw new Error('error');
}

function keepProcessing() : never{
    while(true){
        console.log('hi');
    }
}

const never : number[] = [];
never.push(1);