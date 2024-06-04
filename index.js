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
