let a:number = 123;
let b:string = 'hello';
let c:number[] = [1,3345,4,6234,7];
let d:Array<number> = [1,4,56];
let aa:number|string;
let f:boolean = true;

class Car{
    private speed:number;
    private mark:string;

    constructor(speed:number, mark:string) {
        this.speed=speed;
        this.mark=mark;
    }

    public printInfo(){
        console.log(`mark = ${this.mark} speed = ${this.speed}`);
    }

    public setSpeed(speed:number){
        this.speed=speed;
    }

    public setMark(mark:string){
        this.mark=mark;
    }
}
