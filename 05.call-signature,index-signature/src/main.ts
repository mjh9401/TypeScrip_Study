interface getLinkNumber{
    (like:number) : number; //  호출 시그니처
}

interface Post {
    id : number;
    title : string;
    //getLinkNumber: (like : number) => number;
    getLinkNumber: getLinkNumber;
}


const post1 : Post = {
    id : 1,
    title : 'post 1',
    getLinkNumber(like:number){
        return like
    }
}

post1.getLinkNumber(1);


interface Post2 {
    [key:string] : unknown; // 인덱스 시그니처
    id : number;
    title : string;
}

const post2 : Post2={
    id : 1,
    title : 'post2'
}

post2['description'] = 'description 1';
post2['pages'] = 300;


interface Names {
    [item : number] : string;
  // userNames의 [0] = [item : number]
  // 'John' = string
}

const uerNames : Names = ['John','kim','Joe'];