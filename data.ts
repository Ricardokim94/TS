
//## typescript 끼리는 ambient module 로 인해서
//      import export 안해도 외부파일 사용가능하다.

//따라서 외부에서 가져다 쓰지 못하게 할때는
export { } //이거 만들어 놓으면 된다

//글로벌 변수를 만약 만들고 싶으면 declare global 사용하면 된다.
declare global {
    type Dog = string;
}