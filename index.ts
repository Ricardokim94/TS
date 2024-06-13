//index signature 이란 모든타입이 string 일때 하나하나 다 string 하기 귀찮으니까 한번에 type 주는 것 
interface StringOnly {
    [key :string] : string|number //이렇게 사용함.
   
}
let User = {
    name : 'kim',
    age : 20,
    location : 'seoul'
}
////////////////////////////////////////////////////////////////////////////////
//이게 조금 더 정확한 방법
interface StringOnly2 {
    [key :number] : string //이렇게 사용함.
}
let User2 = {
    0 : 'kim',
    1 : '20',
    2 : 'seoul'
}