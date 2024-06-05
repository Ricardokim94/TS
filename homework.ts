// (숙제1) 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고
// 아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수를 만들어봅시다.
// 파라미터와 return 타입지정도 잘 해봅시다. 

function greet(x?: string) : void{
    if(x){ 
        console.log(`안녕하세요. ${x} 입니다.`);
    }else {
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

type typeTest ={
    color? : string,
    size : number,
    readonly position : number[]
}

let Test_typeTest : typeTest = {
    color : 'black',
    size : 6,
    position : [1,2,3]
}

// 다음을 만족하는 type alias를 만들어보십시오.
// 1. 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.
// 2. 미성년자 여부 속성은 true/false만 들어올 수 있습니다. 
// 3. 멋있게 숙제3에서 만들어둔 type alias를 재활용해봅시다.

type rightType = {
    name : string, 
    phone : number, 
    email? : string,
    adult : boolean
}
let rightType ={
    name : 'kim', 
    phone : 123, 
    
    adult : true
}


