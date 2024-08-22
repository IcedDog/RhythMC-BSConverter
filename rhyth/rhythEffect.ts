export class Effect {
    "effect-type": string;
    "start-tick": number;
    duration?: number;
    time?: number;
    color?: string;
    contents?: string[];
    speed?: number;
    "effect-id"?: string;
    "hologram-loc"?: number[];
    "hologram-contents"?: string[];


    constructor(type: string, start: number) {
        this["effect-type"] = type;
        this["start-tick"] = start;
    }

    setDuration(duration: number): Effect {
        this.duration = duration;
        return this;
    }

    setEndTick(end: number): Effect {
        this.duration = end - this["start-tick"];
        return this;
    }

    setTime(time: number): Effect {
        this.time = time;
        return this;
    }

    setColor(color: string): Effect {
        this.color = color;
        return this;
    }

    setHologram(loc: number[], contents: string[]): Effect {
        this["hologram-loc"] = loc;
        this["hologram-contents"] = contents;
        return this;
    }

    setContents(contents: string[]): Effect {
        this.contents = contents;
        return this;
    }

    setSpeed(speed: number): Effect {
        this.speed = speed;
        return this;
    }

    setEffectId(id: string): Effect {
        this["effect-id"] = id;
        return this;
    }
}