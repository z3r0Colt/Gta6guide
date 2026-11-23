# Leonida Field Guide

An unofficial, fan-made GTA VI companion. Static site, no build step. Built for GitHub Pages.

## What is in it
Story missions, Strangers & side quests, activities, random encounters, money methods, fences, gangs,
cars/boats/planes, mod shops, weapons, gun stores, shops, garages & safehouses, collectibles, trophies,
the 100% checklist, challenges, cheats, glitches, secrets, radio, characters, editions and an interactive map.

The map is Rockstar's official Leonida map (assets/leonida-map.jpg, from rockstargames.com/VI/media). Map © Rockstar Games.
The vehicle and weapon databases (`data/db.js`) are built from GTABase.com specs plus community guides. Images in `assets/img` are official Rockstar Games media.

## Run locally
```
python3 -m http.server 8000
```
Then open http://localhost:8000.

## Host on GitHub Pages
Settings → Pages → Build and deployment → Source: **Deploy from a branch** → pick the branch and `/ (root)`.

## Editing content
All content lives in `data/*.js`. Each file calls `G.add({...})` with groups of items.
Item fields: `n` name, `s` subtitle, `b` badges, `d` description (HTML ok), `start`, `steps`, `reward`, `tip`, `warn`, `kv`, and `at` (a place name from `data/regions.js` that puts a pin on the map). Mission walkthroughs live in `data/walkthroughs*.js`, keyed by mission name.

Not affiliated with Rockstar Games or Take-Two Interactive.
