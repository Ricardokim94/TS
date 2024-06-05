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
//function 에다가 type 주는 법
function test2(x) {
    ////Narrowing     
    // if(typeof x === 'string'){  //if 를 줘서 typeof 만들어 사용
    //     return x+1
    // }else{
    // }
    ////Assertion (type 덮어쓰기)
    var array = [];
    array[0] = x; //as를 사용해서 number로 덮어씀
}
console.log(test2(30));
//assertion 용도
// 1. Narrowing 할때 사용 (변경할 때 사용하는 문법이 아님.)
// 2. 어떤 타입이 들어올지 100% 알때 사용하는 것임.
