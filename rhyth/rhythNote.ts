import { NOTE } from './rhythType.ts';

export class Note {
    type: string;
    pos: number[] | number;
    length?: number;

    constructor(type: string = NOTE.LOOK, pos: number[] = [0, 0]) {
        this.type = type;
        this.pos = pos;
    }

    setHold(pos: number, length: number) {
        this.pos = pos;
        this.length = length;
    }
}