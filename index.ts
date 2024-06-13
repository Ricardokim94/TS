
let obj = {name : 'kim', age : 20}
Object.keys(obj) //object에 있는 key값들을 출력해줄 때 사용

//ketof 
interface Person {
    age : number,
    name : string
}
type PersonKeys = keyof Person //key 값을 꺼내와서 유니온 타입으로 남겨줌
let a : PersonKeys = 'name'


//타입 변환하는 방법
type Test = {
    color : boolean,
    model : boolean,
    price : boolean | number
}

type TypeChanger<MyType> = {
    [key in keyof MyType] : string
}
type 새로운타입 = TypeChanger<Test>



//조건문으로 타입 만들기 (삼항연산자 이용)
type Age2<T> = T extends string ? string : unknown; //타입파라미터 타입 검사할때는 extends 사용해야됨.

let t : Age2<string> //string
let t2 : Age2<number> //unkwon

//infer (조건문에서 쓸수 있는 키워드) : type을 추출하는 역할
type 타입추출<T> = T extends (infer R)[] ? R : unknown //T에서 타입 뽑아달라는 소리(왼쪽에서)
    //타입을 뽑아서 R이라는 곳에 담은거임 - string 이되겠지?
type a2 = 타입추출<string[]>
