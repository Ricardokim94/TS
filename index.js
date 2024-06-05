var 이름 = 1; //타입 엄격하게 관리 가능
var Name = 123;
function test(x) {
    return x * 2;
}
var rename; //any type => 타입실드 해제문법임.
rename = 123;
rename = 'changmok';
var renmae2; //any 랑 같은 의미 /unknown이 조금더 안정성이 있다.
//renmae2 -1    unknown type은 뺄셈을 못한다. 미연에 방지.
// //function 에다가 type 주는 법
// function test2(x: number|string) : void{ //return type지정은 함수() : number 여기다가 한다.
//     if(x === ){
//         console.log(x + 3);
//     }
// } 
// test2(30);
// (숙제1) 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고
// 아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수를 만들어봅시다.
// 파라미터와 return 타입지정도 잘 해봅시다. 
