export class Effect {
    "effect-type": string;
    "start-tick": number;
    duration?: number;
    time?: number;
    color?: string;
    "hologram-loc"?: number[];
    "hologram-contents"?: string[];

    constructor(type: string, start: number) {
        this["effect-type"] = type;
        this["start-tick"] = start;
    }
}