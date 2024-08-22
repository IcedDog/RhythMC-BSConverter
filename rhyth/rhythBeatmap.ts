import { Note } from './rhythNote.ts';
import { Meta } from './rhythMeta.ts';
import { Frame } from './rhythFrame.ts';
import { Effect } from './rhythEffect.ts';

export class Beatmap {
    meta: Meta;
    frames: Frame[];
    effects: Effect[];

    constructor(meta: Meta) {
        this.meta = meta
        this.frames = [];
        this.effects = [];
    }

    addNote(frame: number, note: Note) {
        const result = this.frames.find(f => f["judge-tick"] === frame);
        if (result) {
            result.addNote(note);
        }
        else {
            const newFrame = new Frame(frame);
            newFrame.addNote(note);
            this.frames.push(newFrame);
        }
    }

    cleanup() {
        this.frames.sort((a, b) => a["judge-tick"] - b["judge-tick"]);
    }
}