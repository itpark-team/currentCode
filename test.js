"use strict";
exports.__esModule = true;
var car_1 = require("./car");
var a = 123;
var b = 'hello';
var c = [1, 3345, 4, 6234, 7];
var d = [1, 4, 56];
var aa;
var f = true;
var zzz;
zzz = 123;
zzz = "asdas";
var car1 = new car_1.Car(140, "ford mustang");
car1.printInfo();
car1.setSpeed(560);
car1.setMark("lamba");
car1.printInfo();
car1.move();
var p1 = {
    x: 12,
    y: 23
};
function f1(a) {
    return a * 2;
}
console.log(f1(2));
function printName(name) {
    console.log(name);
}
printName("hururu");
