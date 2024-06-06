//Literal Type Example
function 함수(a : 'hello') : 1|2{ //a 타입을 hello만 들어오게 지정할 수 있다.
    return 1                    // 또한 return type도 1,2 둘만 들어오게 설정할 수 있다.
}

//const 변수란 = 변하면 안되는 변수.
var 자료 = {
    name : 'kim'
} as const          //as const 란 type 지정을 literal type으로 알아서 하란소리.
                    //name 의 타입을 kim으로 바꿔줌 (string x)
function 내함수(a : 'kim') {

}
내함수(자료.name)
