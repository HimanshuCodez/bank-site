# Bank Support Site

A complete, ready-to-run Vite + React project (Tailwind CSS + Framer Motion).

## Run it — exact steps

1. Unzip this folder anywhere on your computer.
2. Open a terminal **inside that unzipped folder** (the one containing `package.json`).
3. Run:
   ```
   npm install
   npm run dev
   ```
4. Open the URL it prints — usually `http://localhost:5173`.

To build for production (creates a `dist/` folder you can deploy):
```
npm run build
```

## Project structure

```
bank-site/
├── index.html
├── package.json          <- has the "dev" / "build" scripts
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── public/
└── src/
    ├── main.jsx
    ├── App.jsx                ← renders <BankSupportSite />
    ├── BankSupportSite.jsx     ← the actual page (all sections)
    ├── index.css              ← Tailwind directives
    └── assets/
        └── manager-photo.png  ← your uploaded hero photo
```

## Customize

Open `src/BankSupportSite.jsx`:

- **Support number** — edit `SUPPORT_NUMBER` and `SUPPORT_NUMBER_DISPLAY`
  near the top of the file. Currently `7449689375`.
- **Bank name / email** — search for "Meridian" and `support@meridian.com`.
- **Hero photo** — replace `src/assets/manager-photo.png` with a new image
  of the same filename, or update the `import managerPhoto from "./assets/manager-photo.png"`
  line to point at a different file.
- **Colors** — navy `#0F1B3D`, gold `#D4A24C`, cream `#F7F5F0`.

## Sections included

1. Hero — headline + Get Support CTA + your photo on the right
2. Reach us your way — Call / Live Chat / Secure Message cards
3. Find answers fast — 6 help-topic grid
4. Protected at every step — security band with trust stats
5. Common questions — animated FAQ accordion
6. CTA + Footer
