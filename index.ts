//type 이 아닌 interface 로 구현해보기
interface Square {              
    color : string; //              interface 쓰는 이유 : extends 사용가능
    width : number;
}
let square : Square = {color : "red", width : 100}

//interface 로 겹치는 부분 extends 해보기
interface Student {
    name : string;
}
interface Teacher extends Student
{
    // name : string;
    age : number;
}
// let student : Student = {name : 'kim'}
// let teacher : Teacher = {name : 'park', age : 10}


//type은 안되나? -> 된다!
type Animal = {name : string}
type Cat = { age : number } & Animal //&기호 사용하면 된다. intersection type
let cat : Cat = {
    name : '고양이',
    age : 3
}                   //오류 안나는 것 확인!


//// type VS interface 가장 큰 차이점!
//// interface 는 중복 선언이 가능하다. / type은 불
interface Student{
    name :string;
}
interface Student{
    score : number
}           //오류 x , 중복선언을 해주면 자동 extends 된다고 생각 하면 된다. 둘다 가진다. name, score
            //그래서 외부 라이브러리에 interface 많이 쓴다. 자기가 속성 추가하면서 쓰기 위해서(재정의)