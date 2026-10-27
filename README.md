# 🏡 Cozy Domo

**The digital welcome book for guests of Cozy Domo.**

A single, mobile-friendly page that gives guests everything they need during their stay. No paper binders, no repeated questions on chat: just tap an icon and find the answer.

## How it works
The page shows a three-column grid of icons. A short line above the grid says “Tap the icons”. Tapping an icon opens that topic.

Location and parking already have details. Every other topic stays on “Coming soon” until it is filled in.

## Why
- Guests get answers instantly, at any hour
- Hosts spend less time answering the same questions
- Easy to update when something changes

## Edit the content
Guest-facing Italian and English text lives in [`content.js`](content.js). Change a string, save, and refresh.

- A **notes** topic (welcome, Wi-Fi, house rules, and the rest) stays on “Coming soon” until you add `paragraphs`, each `{ it, en }`.
- A **places** topic (parking, bars, restaurants, shopping) stays on “Coming soon” until you add `items` in the same shape as the garages: `name`, `address`, `text` (`{ it, en }`), and `mapsUrl`.

Only add details you have checked — no guessed names, passwords, phone numbers, prices, or hours.

## Preview locally
No build step. The site is the static files in this folder (`index.html`, `styles.css`, `app.js`, `content.js`). From here:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000). You can also open `index.html` directly in a browser.

## Status
🚧 In active development.

## Author
Built by [Bruno Flora](https://github.com/Brunoflor) — Naples 🇮🇹
