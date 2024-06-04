let 이름 : string | number = 1; //타입 엄격하게 관리 가능

type 내타입 = string|number; //변수 만드는 방법 //union type
let Name :내타입 = 123;

function test(x : number){ //함수도 타입지정 가능
    return x*2
} 

let rename : any;       //any type => 타입실드 해제문법임.
rename = 123;
rename = 'changmok';

let renmae2 : unknown;  //any 랑 같은 의미 /unknown이 조금더 안정성이 있다.

//renmae2 -1    unknown type은 뺄셈을 못한다. 미연에 방지.
