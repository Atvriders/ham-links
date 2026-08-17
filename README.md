# ham-links

**One page of links to every ham-radio service on your LAN** — no containers
for the services, just a signpost. Built from the Cloudflare tunnel list:
each tile points at the LAN address a tunnel targets (`http://192.168.1.x:port`)
and notes its tunnel ID.

This is the "links rather than containers" companion to
[ham-nexus](https://github.com/Atvriders/ham-nexus).

## Usage

```bash
# 1. Publish the image to your Gitea registry (once)
docker build -t git.waterburp.com/atvriders/ham-links:latest .
docker push git.waterburp.com/atvriders/ham-links:latest

# 2. Run on the host that serves your tunnels
docker compose up -d
```

Open `http://<host>:8086`.

## Editing the links

Everything lives in `links.js` — rename tiles, fix URLs, add or remove
services. The `tentative: true` entries are ports I couldn't positively
identify (license courses and a few unknowns in the 30xx cluster); rename
them once you confirm what each port serves.

If you prefer tiles that point at your **public Cloudflare URLs** instead of
LAN addresses, replace each `url` value — the tile page is fully data-driven.

## Port map used (tunnel list → service)

| Tunnel | Target | Service |
|---|---|---|
| 37 | .67:3012 | HamClock Reborn |
| 38 | .67:7373 | RadioRumble |
| 39 | .67:3011 | Ham Radio Clicker |
| 41/51 | .67:3014 | ARRL Calendar |
| 42/64 | .67:3030 | GrantSpotter |
| 46/49 | .67:3045 | Ham Net Assistant |
| 52 | .67:3017 | Callbook |
| 53 | .67:8080 | 200 Meters & Down |
| 56 | .67:3024 | Ham Radio Storybook |
| 57 | .67:3025 | Copper Wire & Starlight |
| 58 | .67:3023 | Elmer |
| 61 | .4:3028 | Callbook OCR worker |
| 62 | .67:3028 | Callbook OCR coordinator |
| 66 | .67:3033 | Hamdoor |
| 59/60/63 | .67:3026/3027/3031 | License courses (tentative) |
| 65/67/68 | .67:3032/3034/3035 | Unidentified ham-suspect ports (tentative) |
