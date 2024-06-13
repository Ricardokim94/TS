declare function greet(x?: string): void;
declare function count(x: number | string): number;
type typeTest = {
    color?: string;
    size: number;
    readonly position: number[];
};
declare let Test_typeTest: typeTest;
type rightType = {
    name: string;
    phone: number;
    email?: string;
    adult: boolean;
};
declare let rightType: {
    name: string;
    phone: number;
    adult: boolean;
};
declare function Test(a: '가위' | '바위' | '보'): ('가위' | '바위' | '보')[];
declare class Car {
    name: string;
    price: number;
    constructor(name: string, price: number);
    tax(taxprice: number): number;
}
declare let car1: Car;
interface MathObj {
    plus: (a: number, b: number) => number;
    minus: (a: number, b: number) => number;
}
declare let 오브젝트: MathObj;
declare function Test123<MyType extends string | string[]>(x: MyType): void;
