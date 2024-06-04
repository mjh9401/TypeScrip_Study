// function getArrayLength(arr : number[] | string[] | boolean[]) :number{
//     return arr.length;

// }
// function getArrayLength2<T>(arr :T[]) :number{
//     return arr.length;
// }

// const array1 = [1,2,3];
// const array2 = ['a','b','c'];
// const array3 = [true,false,true];

// getArrayLength2<number>(array1);
// getArrayLength2<string>(array2);
// getArrayLength2<boolean>(array3);

// interface Vehicle <T>{
//     name : string;
//     color : string;
//     option : T;
// }

// const car : Vehicle<{price : number}> ={
//     name : 'car',
//     color : 'red',
//     option : {
//         price : 1000,
//     }
// }

// const bike : Vehicle <boolean> ={
//     name : 'bike',
//     color : 'green',
//     option : true,
// }

const makeArr = <X,Y>(x:X,y:Y) :[X,Y] =>{
    return [x,y];
}

const array0 = makeArr<number,number>(4,5);
const array1 = makeArr<string,string>('a','b');

const makeArr2 = <X,Y=string>(x:X,y:Y) :[X,Y] =>{
    return [x,y];
}

const array2 = makeArr2<string>('a','b')

const makeFullName = <T extends{firstName:string, lastName:string}>(obj: T)=>{
    return{
        ...obj,
        fullName : obj.firstName + " " +obj.lastName,
    }
}

makeFullName({firstName:"John",lastName:"Doe", locaation:'Seoul'})
makeFullName({firstName:"John",lastName:"Doe", hello:'Greating'})