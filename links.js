// ham-links — the links data. Edit this file to rename tiles, change URLs, or
// add new services. Public subdomains come from DNS (Cloudflare tunnels);
// entries still on LAN URLs are marked `lan: true` until their hostname is
// added (see README).
//
// Format: { name, tagline?, url, port, tunnel?, note?, tentative?, lan? }
const LINKS = [
  // --- public subdomains (verified via DNS + docker ps on 192.168.1.67) ------
  { name: "HamClock Reborn",   tagline: "Solar, bands, DX, satellites", url: "https://hamclock-reborn.org", port: 3012, tunnel: 37 },
  { name: "RadioRumble",       tagline: "Collegiate contest scoreboard", url: "https://radiorumble.waterburp.com", port: 7373, tunnel: 38, note: "WSJT-X UDP 2237" },
  { name: "Ham Radio Clicker", tagline: "Idle game: handheld → deep space", url: "https://clicker.hamclock-reborn.org", port: 3011, tunnel: 39 },
  { name: "ARRL Calendar",     tagline: "ARRL events & contests", url: "https://calendar.waterburp.com", port: 3014, tunnel: 41 },
  { name: "GrantSpotter",      tagline: "Funding desk for ham clubs", url: "https://grant.waterburp.com", port: 3030, tunnel: 42, note: "login" },
  { name: "Elmer",             tagline: "Radio catalog + connection finder", url: "https://elmer.waterburp.com", port: 3023, tunnel: 58 },
  { name: "Hamdoor",           tagline: "Live spots + FCC ULS map", url: "https://hamdoor.waterburp.com", port: 3033, tunnel: 66, note: "login" },
  { name: "Mia's Storybook",   tagline: "Ham storybook for kids", url: "https://mia.waterburp.com", port: 3024, tunnel: 56 },
  { name: "Copper Wire & Starlight", tagline: "Ham novel for young builders", url: "https://copper.waterburp.com", port: 3025, tunnel: 57 },
  { name: "Callbook OCR Outpost", tagline: "OCR pipeline coordinator", url: "https://ocr.waterburp.com", port: 3028, tunnel: 62 },
  { name: "ARRL Band Chart",   tagline: "Interactive 3D bands chart", url: "https://bands.waterburp.com", port: 3034, tunnel: 67 },

  // --- confirmed on the LAN, public hostname still unknown -------------------
  { name: "Net Assistant",     tagline: "Club repeater & net assistant", url: "http://192.168.1.67:3045", port: 3045, tunnel: 46, note: "login", lan: true },
  { name: "Callbook",          tagline: "USA callbook archive 1909–present", url: "http://192.168.1.67:3017", port: 3017, tunnel: 52, lan: true },
  { name: "License Courses",   tagline: "Tech / General / Extra books (one proxy)", url: "http://192.168.1.67:3032", port: 3032, tunnel: 65, lan: true },
  { name: "Callbook OCR Worker", tagline: "OCR pipeline worker (.4)", url: "http://192.168.1.4:3028", port: 3028, tunnel: 61, lan: true },
  { name: "200 Meters & Down", tagline: "Technical history of ham radio", url: "http://192.168.1.61:8080", port: 8080, tunnel: 26, tentative: true, lan: true, note: ".61 — verify" },
];
