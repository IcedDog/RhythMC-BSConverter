export class Meta {
    name: string;
    composer: string;
    charter: string;
    level: number;
    offset: number;
    "flow-speed": number;
    uuid: string;
    length: number;

    constructor(name: string, composer: string, charter: string, level: number, offset: number, flowSpeed: number, uuid: string, length: number) {
        this.name = name;
        this.composer = composer;
        this.charter = charter;
        this.level = level;
        this.offset = offset;
        this["flow-speed"] = flowSpeed;
        this.uuid = uuid;
        this.length = length;
    }
}