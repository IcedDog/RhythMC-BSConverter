# RhythMC-BSConverter
ye

## prerequisite:
1. [nanazip](https://github.com/M2Team/NanaZip)/7z installed
2. [python](https://www.python.org/) installed
3. [remapper](https://github.com/Swifter1243/ReMapper) installed (which requires [deno](https://deno.com/) installed) (does not require you to have VR device or own Beat Saber)
4. [ffmpeg](https://ffmpeg.org/) installed

in theory any beat saber custom chart editor could work, i use chromapper for reference.

## usage
first make sure that remapper is set up in the desired map, then throw all the files into the folder (replacing the original `script.ts`)

then use terminal to run `python -u pack.py` to run code

the output files are `output.json` and `all-parts.zip`

remember to modify the meta data in the json file
