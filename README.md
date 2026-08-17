# ham-links

**One page of links to every ham-radio service on your LAN** — no containers
for the services, just a signpost. Built from the Cloudflare tunnel list:
each tile points at the LAN address a tunnel targets (`http://192.168.1.x:port`)
and notes its tunnel ID.

This is the "links rather than containers" companion to
[ham-nexus](https://github.com/Atvriders/ham-nexus).

## Usage

```bash
docker compose up -d     # pulls git.waterburp.com/atvriders/ham-links:latest
```

Open `http://<host>:8086`.

## CI builds

Two pipelines publish the image on every push to `main`:

- **Gitea Actions** (`.gitea/workflows/build.yml`) — builds and pushes to the
  Gitea registry (`git.waterburp.com/atvriders/ham-links`, the compose default).
  Gitea auto-provides `GITEA_TOKEN`; the instance just needs Actions enabled.
- **GitHub Actions** (`.github/workflows/build.yml`) — builds and pushes to
  GitHub GHCR (`ghcr.io/atvriders/ham-links`). Add a `GITEA_TOKEN` repo secret
  to also cross-push to Gitea from GitHub.

Pull from the other registry via `.env`:

```bash
REGISTRY=ghcr.io/atvriders             # GitHub GHCR
REGISTRY=git.waterburp.com/atvriders   # default (Gitea)
```

Manual fallback (only needed without CI):

```bash
docker build -t git.waterburp.com/atvriders/ham-links:latest .
docker push git.waterburp.com/atvriders/ham-links:latest
```

## Editing the links

Everything lives in `links.js` — rename tiles, fix URLs, add or remove
services. Tiles with `lan: true` still use LAN addresses because their public
hostname wasn't found; `tentative: true` needs verification. Add the missing
hostnames and drop `lan`/`tentative` once confirmed.

## Verified map (docker ps on 192.168.1.67 + DNS)

| Service | Host | Public URL | Tunnel |
|---|---|---|---|
| HamClock Reborn | .67:3012 | https://hamclock-reborn.org | 37 |
| RadioRumble | .67:7373 | https://radiorumble.waterburp.com | 38 |
| Ham Radio Clicker | .67:3011 | https://clicker.hamclock-reborn.org | 39 |
| ARRL Calendar | .67:3014 | https://calendar.waterburp.com | 41/51 |
| GrantSpotter | .67:3030 | https://grant.waterburp.com | 42/64 |
| Elmer | .67:3023 | https://elmer.waterburp.com | 58 |
| Hamdoor | .67:3033 | https://hamdoor.waterburp.com | 66 |
| Mia's Storybook | .67:3024 | https://mia.waterburp.com | 56 |
| Copper Wire & Starlight | .67:3025 | https://copper.waterburp.com | 57 |
| Callbook OCR Outpost | .67:3028 | https://ocr.waterburp.com | 62 |
| ARRL Band Chart | .67:3034 | https://bands.waterburp.com | 67 |
| Net Assistant | .67:3045 | https://net-assistant.com | 46/49 |
| Callbook | .67:3017 | hostname unknown — LAN | 52 |
| License Courses (one proxy) | .67:3032 | https://hambook.waterburp.com | 65 |
| Callbook OCR Worker | .4:3028 | LAN | 61 |
| 200 Meters & Down | .61:8080 (verify) | LAN | 26 |

Corrections from the live box: `.67:3026/3027/3031/3035/8080` are perihelion,
fractalarium, postbox, huddlespark and the Discord music bot — not ham, so
they are not listed.
