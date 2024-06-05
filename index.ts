// let 동물 : string |number | undefined; //너무 길다 -> 변수로 뺼수 있음 type

// let 동물 : Animal = 'dog'; 이런식으로 사용

//example
type Animal = {name : string, age : number };
let 동물 : Animal = {name : 'dog', age : 10}


//readonly - 그냥 typescript에서만 경고 해주지 JS 에서는 바꿔준다. 
type Girlfrend = {
   readonly name : string //readonly 란 절대 수정 할 수 없다.
}
const 여친 :  Girlfrend = {
    name : '카리나'
}

//type변수 uniion 으로 합치기
type Name = string;
type Age = number;

type person = Name | Age; // 합치는거 가능 (person 은 string 아니면 number 들어올수 있다 둘다.)

type PositionX = { x : number };
type PositionY = { y : number };

type NewType = PositionX & PositionY; //object는 and 기호 사용(&)
                                      //속성을 합친다 = object 를 extend 한다.
let position : NewType = {x:10, y:30 };

//*type 은 재정의가 불가능 하다!!* 조금 엄격하게 쓸 수 있다.

