var Person = /** @class */ (function () {
    function Person(a) {
        this.name = a;
    }
    Person.prototype.TestFunction = function (a) {
        console.log('안녕 : ', a);
    };
    return Person;
}());
var 사람1 = new Person('kim');
var 사람2 = new Person('park');
console.log('t', 사람1);
console.log('t', 사람2);
사람1.TestFunction('안녕');
