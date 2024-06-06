// partial

interface Address {
    email : string;
    address : string;
}

const me : Partial<Address> = {};
const you : Partial<Address> = {email : 'john@abc.com'};
const all : Address = {email : 'john@abc.com', address : 'john'};

// Pick
interface Todo {
    title : string;
    description : string;
    completed : boolean;
}

type TodoPreview = Pick<Todo, 'title'|'completed'>;

const todo : TodoPreview ={
    title : 'Clean Room',
    completed : false,
}

// Omit 생략하다
interface Todo2{
    title : string;
    description : string;
    completed : boolean;
    createdAt : number;
}

type TodoPreview2 = Omit<Todo2,'description'>

const todo2 : TodoPreview2= {
    title : 'clear room',
    completed : false,
    createdAt : 12341234,
}

// Required
type User = {
    firstName : string,
    lastName?: string,
}

let firtsUser : User ={
    firstName : 'john'
}

// let secondUser : Required<User> ={
//     firstName : 'John'
// }
// => 속성이 갯수가 맞지 않아서 에러

// Record
interface CatInfo{
    age: number;
    breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats : Record<CatName,CatInfo> = {
    miffy : {age: 10, breed : 'persian'},
    boris : {age : 5, breed : 'maine coon'},
    mordred : {age : 16, breed : 'british shothair'},
}


// ReturnType
type T0 = ReturnType<()=>string>
type T1 = ReturnType<(s:string)=>void>

function fn(str:string){
    return str;
}

const a : ReturnType<typeof fn> = 'Hello';
// const b : ReturnType<typeof fn> = true; => 타입이 맞지 않아서 에러
