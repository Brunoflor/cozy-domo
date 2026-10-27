# 🏡 Cozy Domo

**The digital welcome book for guests of Cozy Domo.**

A single, mobile-friendly page that gives guests everything they need during their stay. No paper binders, no repeated questions on chat: just tap an icon and find the answer.

## How it works
The page shows a grid of **icons**, one for each topic. Tapping an icon opens its details.

| Icon | What guests find |
|---|---|
| 📍 **Location** | Where the property is and how to get there |
| 🅿️ **Parking** | Where to park nearby |
| 🍝 **Restaurants** | Recommended places to eat |
| ☕ **Bars** | Where to grab a coffee or a drink |
| ➕ | …and more sections for everything a guest might need |

## Why
- Guests get answers instantly, at any hour
- Hosts spend less time answering the same questions
- Easy to update when something changes

## Edit the content
Guest-facing Italian and English text lives in [`content.js`](content.js). Change a string, save, and refresh. Restaurants and Bars stay on “Coming soon” until you add real places to their lists, in the same shape as the parking garages. Only add details you have checked — no guessed names, phone numbers, prices, or hours.

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
