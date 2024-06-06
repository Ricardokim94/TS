class Person {
    name: string; //ts 가 js 랑 다른점.
    
    constructor(a : string){
        this.name = a;
    }

    TestFunction(a : string){
        console.log('안녕 : ', a);
    }

}



let 사람1 = new Person('kim');
let 사람2 = new Person('park');


console.log('t', 사람1);
console.log('t', 사람2);

사람1.TestFunction('안녕');