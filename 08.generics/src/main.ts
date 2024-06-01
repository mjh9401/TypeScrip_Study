class Post {

    constructor(private id:number, protected title:string){
        
    }

    getPost(){
        return `postId ${this.id}, postTitle: ${this.title}`;
    }
}

class PostB extends Post{
    
    getPost() {
        return this.title;
    }
}
const post2 : PostB = new PostB(2,'title 2');

const post : Post = new Post(1,'title 1');
post2.getPost();


