var a = 123;
var b = 'hello';
var c = [1, 3345, 4, 6234, 7];
var d = [1, 4, 56];
var aa;
var f = true;
var Car = /** @class */ (function () {
    function Car(speed, mark) {
        this.speed = speed;
        this.mark = mark;
    }
    Car.prototype.printInfo = function () {
        console.log("mark = " + this.mark + " speed = " + this.speed);
    };
    Car.prototype.setSpeed = function (speed) {
        this.speed = speed;
    };
    Car.prototype.setMark = function (mark) {
        this.mark = mark;
    };
    return Car;
}());
var car1 = new Car(140, "ford mustang");
car1.printInfo();
car1.setSpeed(560);
car1.setMark("lamba");
car1.printInfo();
