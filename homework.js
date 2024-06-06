// (숙제1) 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고
// 아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수를 만들어봅시다.
// 파라미터와 return 타입지정도 잘 해봅시다. 
function greet(x) {
    if (x) {
        console.log("\uC548\uB155\uD558\uC138\uC694. ".concat(x, " \uC785\uB2C8\uB2E4."));
    }
    else {
        console.log('이름이 없습니다');
    }
}
greet('김창목');
// (숙제2) 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오.
// 예를 들어 '245' 이런 문자를 입력하면 3이 return 되어야합니다.
// 숫자도 마찬가지로 9567 이런 숫자를 입력하면 4가 return 되어야합니다.
// 숫자 또는 문자 이외의 자료가 들어오면 안됩니다. 
function count(x) {
    if (typeof x === 'string' || typeof x === 'number') {
        return x.toString().length;
    }
    else {
        throw new Error('숫자 또는 문자 이외의 자료가 들어오면 안됩니다.');
    }
}
console.log(count('245')); // 출력: 3
console.log(count(9567)); // 출력: 4
console.log(count('창목')); // 출력: 2
var Test_typeTest = {
    color: 'black',
    size: 6,
    position: [1, 2, 3]
};
var rightType = {
    name: 'kim',
    phone: 123,
    adult: true
};
//Literal Type 
//가위바위보 중 1개만 입력 할수 있고,
//가위바위보만 들어올수 있는 array retrun
function Test(a) {
    return ['가위'];
}
// 1. 대충 { model : '소나타', price : 3000 } 이렇게 생긴 object를 복사해주는 class를 만들어보십시오.
// 2. 그리고 복사된 object 자료들은 .tax() 라는 함수를 사용가능한데 현재 object에 저장된 price의 10분의1을 출력해주어야합니다. 
// 3. model과 price 속성의 타입지정도 알아서 잘 해보십시오. tax() 함수의 return 타입도요. 
var Car = /** @class */ (function () {
    function Car(name, price) {
        this.name = name;
        this.price = price;
    }
    Car.prototype.tax = function (taxprice) {
        return this.price * 0.1;
    };
    return Car;
}());
var car1 = new Car('소나타', 3000);
console.log('car : ', car1);
console.log('tax : ', car1.tax);
