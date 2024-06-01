const bodyElement = document.querySelector('body') as HTMLBodyElement;
bodyElement.innerText = 'Hello';

const bodyElement2 = document.querySelector('body');
bodyElement2!.innerText = 'Hello';

const bodyElement3 = document.querySelector('body');
if(bodyElement3){
    bodyElement3.innerText = 'Hello';
}

// type 잘못 쓴 예시
function func(arg : string | null){
    if(arg){
        return arg.toLowerCase()
    }
}

func('hello');
func(null);