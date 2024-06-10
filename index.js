var square = { color: "red", width: 100 };
var cat = {
    name: '고양이',
    age: 3
}; //오류 안나는 것 확인!
//그래서 외부 라이브러리에 interface 많이 쓴다. 자기가 속성 추가하면서 쓰기 위해서(재정의)
//함수 rest 파라미터, destructuring 할 때 타입 지정
function 함수() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    console.log(a);
}
함수(1, 2, 3, 4);
var _a = { student: true, age: 20 }, student = _a.student, age = _a.age;
var object1 = { student: true, age: 22 };
function 함수1(_a) {
    var student = _a.student, age = _a.age;
}
함수1({ student: true, age: 20 });
//////////////////////////////////////////////////////////////////
//typeof 안쓰고 Narrowing 쉽게 할 수 있는 방법1 = &&쓰면 된다.  
function 함수2(a) {
    if (a && typeof a === 'string') { // &&쓰면 된다. undefined
        // a 가 undefined 면 if 문 실행 x
        // a 가 string 이면 if 문 실행 0
    }
}
function 함수3(animal) {
    if ("swim" in animal) { //in 사용하면 오른쪽에 있는 속성에 있는지 확인한다음 맞으면 true 틀리면 false 반환.
        return animal.swim;
    }
    return animal.fly;
}
//typeof 안쓰고 Narrowing 쉽게 할 수 있는 방법3 = instanceof
var 날짜 = new Date();
if (날짜 instanceof Date) {
    //이런식으로 사용함.
}
function 함수4(x) {
    if (x.wheel == '4개') { //wheel로 구분(바퀴가 4개면 자동차) 고정된 값을 넣으라는 말임.
        console.log('이 차는 ' + x.color);
    }
    else {
        console.log('이 바이크는 ' + x.color);
    }
}
