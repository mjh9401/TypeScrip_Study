function getArrayLength(arr : number[] | string[] | boolean[]) :number{
    return arr.length;

}
function getArrayLength2<T>(arr :T[]) :number{
    return arr.length;
}

const array1 = [1,2,3];
const array2 = ['a','b','c'];
const array3 = [true,false,true];

getArrayLength2<number>(array1);
getArrayLength2<string>(array2);
getArrayLength2<boolean>(array3);

interface Vehicle <T>{
    name : string;
    color : string;
    option : T;
}

const car : Vehicle<{price : number}> ={
    name : 'car',
    color : 'red',
    option : {
        price : 1000,
    }
}

const bike : Vehicle <boolean> ={
    name : 'bike',
    color : 'green',
    option : true,
}