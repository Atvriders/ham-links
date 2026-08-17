// ham-links — the links data. Edit this file to rename tiles, change URLs, or
// add new services. `url` is what "Open" targets; leave as the LAN address
// (works from inside your network) or swap in your public Cloudflare URL.
//
// Format: { name, tagline?, url, port, tunnel?, note?, tentative? }
const LINKS = [
  // --- confirmed by port map -----------------------------------------------
  { name: "HamClock Reborn",  tagline: "Solar, bands, DX, satellites", url: "http://192.168.1.67:3012", port: 3012, tunnel: 37 },
  { name: "RadioRumble",      tagline: "Collegiate contest scoreboard", url: "http://192.168.1.67:7373", port: 7373, tunnel: 38, note: "WSJT-X UDP 2237" },
  { name: "Ham Radio Clicker", tagline: "Idle game: handheld → deep space", url: "http://192.168.1.67:3011", port: 3011, tunnel: 39 },
  { name: "ARRL Calendar",    tagline: "ARRL events & contests", url: "http://192.168.1.67:3014", port: 3014, tunnel: 41 },
  { name: "GrantSpotter",     tagline: "Funding desk for ham clubs", url: "http://192.168.1.67:3030", port: 3030, tunnel: 42, note: "login" },
  { name: "Net Assistant",    tagline: "Club repeater & net assistant", url: "http://192.168.1.67:3045", port: 3045, tunnel: 46, note: "login" },
  { name: "Callbook",         tagline: "USA callbook archive 1909–present", url: "http://192.168.1.67:3017", port: 3017, tunnel: 52 },
  { name: "Mia's Storybook",  tagline: "Ham storybook for kids", url: "http://192.168.1.67:3024", port: 3024, tunnel: 56 },
  { name: "Copper Wire & Starlight", tagline: "Ham novel for young builders", url: "http://192.168.1.67:3025", port: 3025, tunnel: 57 },
  { name: "Elmer",            tagline: "Radio catalog + connection finder", url: "http://192.168.1.67:3023", port: 3023, tunnel: 58 },
  { name: "Hamdoor",          tagline: "Live spots + FCC ULS map", url: "http://192.168.1.67:3033", port: 3033, tunnel: 66, note: "login" },
  { name: "200 Meters & Down", tagline: "Technical history of ham radio", url: "http://192.168.1.67:8080", port: 8080, tunnel: 53 },
  { name: "Callbook OCR Outpost", tagline: "OCR pipeline coordinator", url: "http://192.168.1.67:3028", port: 3028, tunnel: 62 },
  { name: "Callbook OCR Worker",  tagline: "OCR pipeline worker", url: "http://192.168.1.4:3028", port: 3028, tunnel: 61 },

  // --- tentative: license courses (the 30xx cluster, port-remapped) ---------
  { name: "Technician Course?", tagline: "Your First Ham License", url: "http://192.168.1.67:3026", port: 3026, tunnel: 59, tentative: true },
  { name: "General Course?",    tagline: "Your Next Ham License", url: "http://192.168.1.67:3027", port: 3027, tunnel: 60, tentative: true },
  { name: "Extra Course?",      tagline: "Your Last Ham License", url: "http://192.168.1.67:3031", port: 3031, tunnel: 63, tentative: true },

  // --- unidentified ham-suspect ports on the .67 box ------------------------
  { name: "Service on :3032", url: "http://192.168.1.67:3032", port: 3032, tunnel: 65, tentative: true },
  { name: "Service on :3034", url: "http://192.168.1.67:3034", port: 3034, tunnel: 67, tentative: true },
  { name: "Service on :3035", url: "http://192.168.1.67:3035", port: 3035, tunnel: 68, tentative: true },
];
