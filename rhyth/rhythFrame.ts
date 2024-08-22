import { Note } from "./rhythNote.ts";

export class Frame {
    "judge-tick": number;
    notes: Note[];

    constructor(tick: number) {
        this["judge-tick"] = tick;
        this.notes = [];
    }

    addNote(note: Note): Frame {
        this.notes.push(note);
        return this;
    }
}