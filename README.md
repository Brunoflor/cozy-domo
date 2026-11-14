# 🏡 Cozy Domo

**The digital welcome book for guests of Cozy Domo.**

A single, mobile-friendly page that gives guests everything they need during their stay. No paper binders, no repeated questions on chat: just tap an icon and find the answer.

## How it works
The page shows a three-column grid of icons. Tapping an icon opens that topic. Check-in and check-out are filled in. Location, parking, and amenities open from inside Check-in. House rules, things to do, and info open from inside Welcome.

The guide is in Italian, English, Spanish, French, German, Portuguese, Simplified Chinese, Japanese, and Arabic. The first visit follows the browser’s language list and otherwise uses English. The choice is remembered. Arabic is laid out right to left.

Location and parking already have details. Amenities, house rules, things to do, info, and every other empty topic, stay on “Coming soon” until they are filled in.

## Why
- Guests get answers instantly, at any hour
- Hosts spend less time answering the same questions
- Easy to update when something changes

## Edit the content
Guest-facing text lives in [`content.js`](content.js). Change a string, save, and refresh.

Each sentence is an object with one field per language: `it`, `en`, `es`, `fr`, `de`, `pt`, `zh`, `ja`, `ar`. If a language is missing, the page uses English.

- A **notes** topic (welcome, Wi-Fi, house rules, and the rest) stays on “Coming soon” until you add `paragraphs`, each a language object.
- A **places** topic (parking, bars, restaurants, shopping) stays on “Coming soon” until you add `items` in the same shape as the garages: `name`, `address`, `text` (a language object), and `mapsUrl`.

Only add details you have checked — no guessed names, passwords, phone numbers, prices, or hours.

## Preview locally
No build step. The site is the static files in this folder (`index.html`, `styles.css`, `app.js`, `content.js`, and `icons/`). Whenever you change CSS or JavaScript, bump the `?v=` version in `index.html` (the stylesheet, the scripts, and `COZY_VERSION`). From here:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000). You can also open `index.html` directly in a browser.

## Icons
The section icons are custom-made for Cozy Domo.

## Status
🚧 In active development.

## Author
Built by [Bruno Flora](https://github.com/Brunoflor) — Naples 🇮🇹
