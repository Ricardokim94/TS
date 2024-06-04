let 이름 : string | number = 1; //타입 엄격하게 관리 가능

type 내타입 = string|number; //변수 만드는 방법
let Name :내타입 = 123;

function test(x : number){ //함수도 타입지정 가능
    return x*2
} 
