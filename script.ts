import { NOTETYPE, CUT } from "https://deno.land/x/remapper@3.1.2/src/constants.ts";
import { BPMChange } from "https://deno.land/x/remapper@3.1.2/src/event.ts";
import { Difficulty } from "https://deno.land/x/remapper@3.1.2/src/mod.ts";
import { info } from "https://deno.land/x/remapper@3.1.2/src/beatmap.ts";
import { Beat, BPMEntry } from "./rhyth/beats.ts";
import { Beatmap } from "./rhyth/rhythBeatmap.ts";
import { Note } from "./rhyth/rhythNote.ts";
import { Meta } from './rhyth/rhythMeta.ts';
import { NOTE } from './rhyth/rhythType.ts';

const map = new Difficulty("ExpertPlusStandard");

// Timings Related
if (map.BPMChanges[0].time !== 0) map.BPMChanges.unshift(new BPMChange(0, info.BPM));
const bpmArray = new Array<BPMEntry>();
map.BPMChanges.forEach((bpmChange) => {
    bpmArray.push({ beat: bpmChange.time, bpm: bpmChange.BPM });
});
const beat = new Beat(bpmArray, info.songOffset);

// Meta Data
const meta = new Meta(
    info.name,
    info.authorName,
    info.mapper,
    1.0,
    Math.round(info.songOffset * 20),
    1.0,
    info.subName,
    Math.round((info.previewDuration + info.previewStart) * 20)
)
console.log(meta)
const beatmap = new Beatmap(meta);

// Process Notes
map.notes.forEach((note) => {
    let noteType: string = NOTE.LOOK;
    if (note.direction === CUT.DOT) noteType = NOTE.LOOK;
    else if (note.type === NOTETYPE.RED) noteType = NOTE.LEFT_CLICK;
    else if (note.type === NOTETYPE.BLUE) noteType = NOTE.RIGHT_CLICK;
    beatmap.addNote(
        beat.toTick(note.time),
        new Note(noteType, [note.x - 1, note.y - 1])
    );
})

map.bombs.forEach((bomb) => {
    beatmap.addNote(
        beat.toTick(bomb.time),
        new Note(NOTE.DO_NOT_CLICK, [bomb.x - 1, bomb.y - 1])
    );
})

map.walls.forEach((wall) => {
    const newNote = new Note(NOTE.HOLD, [0, 0]);
    newNote.setHold(wall.x - 1, beat.toTick(wall.duration))
    beatmap.addNote(beat.toTick(wall.time), newNote);
})

// Write to file
beatmap.cleanup();
Deno.writeTextFileSync("output.json", JSON.stringify(beatmap));