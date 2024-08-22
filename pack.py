import os
import json
import subprocess
import shutil

segment_time = 15

with open("Info.dat", "r", encoding='UTF-8') as file:
    data = json.load(file)
    song_filename = data["_songFilename"]

subprocess.call(['ffmpeg', '-i', song_filename, '-f', 'segment', '-segment_time', str(segment_time), 'output%d.ogg'])

idx = 1
for _,file in enumerate(sorted(os.listdir()), 1):
    if file.startswith("output") and file.endswith(".ogg") and file!=data["_songName"]:
        zip_filename = f"part{idx}.zip"
        idx += 1
        os.makedirs("assets/minecraft/sounds/mob/irongolem", exist_ok=True)
        shutil.move(file, f"assets/minecraft/sounds/mob/irongolem/death.ogg")
        with open("pack.mcmeta", "w", encoding='UTF-8') as mcmeta_file:
            mcmeta_file.write('{"pack": {"pack_format": 22,"description": "§bRhythMC §3韵律方块 §6音乐资源包\n§c§o'+data["_songName"]+' §f- §e'+data["_songAuthorName"]+'}}')
        subprocess.call(['7z', 'a', '-sdel', zip_filename, 'assets', 'pack.mcmeta'])

subprocess.call(['7z', 'a', '-sdel', 'all_parts.zip', 'part*.zip'])

subprocess.call(['deno','run','--no-check','--allow-all','script.ts'])