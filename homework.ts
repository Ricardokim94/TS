// (숙제1) 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고
// 아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수를 만들어봅시다.
// 파라미터와 return 타입지정도 잘 해봅시다. 

function greet(x?: string): void {
    if (x) {
        console.log(`안녕하세요. ${x} 입니다.`);
    } else {
        console.log('이름이 없습니다')
    }
}

greet('김창목');

// (숙제2) 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오.
// 예를 들어 '245' 이런 문자를 입력하면 3이 return 되어야합니다.
// 숫자도 마찬가지로 9567 이런 숫자를 입력하면 4가 return 되어야합니다.
// 숫자 또는 문자 이외의 자료가 들어오면 안됩니다. 

function count(x: number | string): number {
    if (typeof x === 'string' || typeof x === 'number') {
        return x.toString().length;
    } else {
        throw new Error('숫자 또는 문자 이외의 자료가 들어오면 안됩니다.');
    }
}

console.log(count('245')); // 출력: 3
console.log(count(9567));  // 출력: 4
console.log(count('창목'));  // 출력: 2



// 다음 조건을 만족하는 타입을 만들어봅시다. 
// 1. 이 타입은 object 자료형이어야합니다.
// 2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다. 
// 3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.
// 4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.  
// type alias로 만들어보셈 

type typeTest = {
    color?: string,
    size: number,
    readonly position: number[]
}

let Test_typeTest: typeTest = {
    color: 'black',
    size: 6,
    position: [1, 2, 3]
}

// 다음을 만족하는 type alias를 만들어보십시오.
// 1. 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.
// 2. 미성년자 여부 속성은 true/false만 들어올 수 있습니다. 
// 3. 멋있게 숙제3에서 만들어둔 type alias를 재활용해봅시다.

type rightType = {
    name: string,
    phone: number,
    email?: string,
    adult: boolean
}
let rightType = {
    name: 'kim',
    phone: 123,

    adult: true
}

//Literal Type 
//가위바위보 중 1개만 입력 할수 있고,
//가위바위보만 들어올수 있는 array retrun
function Test(a: '가위' | '바위' | '보'): ('가위' | '바위' | '보')[] {
    return ['가위']
}

// 1. 대충 { model : '소나타', price : 3000 } 이렇게 생긴 object를 복사해주는 class를 만들어보십시오.
// 2. 그리고 복사된 object 자료들은 .tax() 라는 함수를 사용가능한데 현재 object에 저장된 price의 10분의1을 출력해주어야합니다. 
// 3. model과 price 속성의 타입지정도 알아서 잘 해보십시오. tax() 함수의 return 타입도요. 

class Car {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
    tax(taxprice: number) {
        return this.price * 0.1
    }
}
let car1 = new Car('소나타', 3000)
console.log('car : ',car1);
console.log('tax : ', car1.tax);


// object 안에 함수를 2개 넣고 싶은데요 
// 1. 이 object 자료는 plus() 함수를 내부에 가지고 있으며 plus 함수는 파라미터 2개를 입력하면 더해서 return 해줍니다. 
// 2. 이 object 자료는 minus() 함수를 내부에 가지고 있으며 minus 함수는 파라미터 2개를 입력하면 빼서 return 해줍니다. 
// 이 object 자료를 어떻게 만들면 될까요? 
// interface를 이용해서 object에 타입지정도 해보십시오. 
interface MathObj {
    plus : (a:number, b:number) => number,
    minus : (a:number, b:number) => number
  }
  
  let 오브젝트 :MathObj = {
    plus(a,b){
      return a + b
    },
    minus(a,b){
      return a - b
    }
  } 


// 문자를 집어넣으면 문자의 갯수, array를 집어넣으면 array안의 자료 갯수를 콘솔창에 출력해주는 함수는 어떻게 만들까요? 
// 연습삼아 Generic 이런걸로 만들어봅시다. 굳이 Generic 이런게 필요는 없겠지만요 
// (동작 예시)
// 함수<string>('hello') 이렇게 사용하면 콘솔창에 5가 나와야합니다.  
// 함수<string[]>( ['kim', 'park'] ) 이렇게 사용하면 콘솔창에 2가 나와야합니다. 

function Test123<MyType extends string | string[]>(x : MyType){
    console.log(x.length)
}

Test123<string>('hello');
Test123<string[]>(['kim', 'park']);
  
    