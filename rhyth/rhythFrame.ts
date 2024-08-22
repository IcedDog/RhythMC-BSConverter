import { Note } from "./rhythNote.ts";

export class Frame {
    "judge-tick": number;
    notes: Note[];

    constructor(tick: number) {
        this["judge-tick"] = tick;
        this.notes = [];
    }

    addNote(note: Note) {
        this.notes.push(note);
    }
}