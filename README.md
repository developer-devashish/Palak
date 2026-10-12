# Best Friend Birthday Website 🎂

A responsive React + Vite birthday surprise website with a countdown, memories, a letter, fun moments, reasons-you're-special cards, a birthday cake, and confetti.

## 1. Run it locally

Install Node.js (LTS), unzip the project, open a terminal in this folder, and run:

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually `http://localhost:5173`).

## 2. Personalize it first

Open `src/App.jsx` and edit these constants near the top:

```js
const FRIEND_NAME = "Your Bestie";
const BIRTHDAY_DATE = "2026-10-19T00:00:00";
```

Use the birthday in local time and format `YYYY-MM-DDTHH:mm:ss`. The countdown changes to the birthday greeting automatically when the date arrives.

Also personalize:
- The letter in the `letter-section` JSX.
- The memory captions and image URLs in the `memories` array.
- The reasons and inside jokes.
- Replace the demo photo URLs with your own photos if you want a more personal result.

## 3. Add your song

Place an audio file at `public/birthday-song.mp3`. To wire up actual playback, add an `Audio` element/ref in `App.jsx` and call `play()` / `pause()` from the music button. The current player is a styled UI placeholder so it doesn't unexpectedly play audio.

## 4. Build for production

```bash
npm run build
```

The production website is generated in `dist/`.

## 5. Publish free with GitHub Pages or Vercel

Push this project to a GitHub repository and import it into Vercel, or configure GitHub Pages for a Vite app. Test the deployed link on a phone before sharing it.

## Notes

- Photos currently use remote Unsplash image URLs and need an internet connection. For privacy and reliability, you can put your own images in `public/images/` and update the URLs.
- The countdown is controlled by `BIRTHDAY_DATE`; set it to your friend's actual birthday.
