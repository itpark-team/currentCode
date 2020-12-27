import {Car} from "./car";

let a: number = 123;
let b: string = 'hello';
let c: number[] = [1, 3345, 4, 6234, 7];
let d: Array<number> = [1, 4, 56];
let aa: number | string;
let f: boolean = true;
let zzz:any;
zzz=123;
zzz="asdas";


let car1:Car = new Car(140,"ford mustang");
car1.printInfo();

car1.setSpeed(560);
car1.setMark("lamba");

car1.printInfo();
car1.move();

interface Point{
    x:number;
    y:number;
}

let p1:Point = {
    x:12,
    y:23
}

function f1(a: number):number {
    return a*2;
}

console.log(f1(2));


function printName(name: string) {
    console.log(name);
}

printName("hururu");

