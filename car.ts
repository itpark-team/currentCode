import {IMovable} from "./imovable";

export class Car implements IMovable {
    private speed: number;
    private mark: string;

    constructor(speed: number, mark: string) {
        this.speed = speed;
        this.mark = mark;
    }

    public move(): void {
        console.log("MOVEEEEEEE")
    }

    public printInfo() {
        console.log(`mark = ${this.mark} speed = ${this.speed}`);
    }

    public setSpeed(speed: number) {
        this.speed = speed;
    }

    public setMark(mark: string) {
        this.mark = mark;
    }
}