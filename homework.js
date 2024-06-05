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
