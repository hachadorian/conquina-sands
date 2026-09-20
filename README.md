# Sea Isle Shore House

A responsive single-property listing for **17 42nd Street, Unit #3, Sea Isle City, NJ 08243**. Built with React and Vite, with local property photos, an accessible photo gallery, room details, and email inquiries. No price is displayed.

## Run locally

```sh
npm install
npm run dev
```

## Validate and build

```sh
npm run lint
npm test
npm run build
npm run preview
```

Browser tests use Microsoft Edge. If Edge is unavailable, install a Playwright browser and adjust `channel` in `playwright.config.js`. Playwright is pinned for this workspace's Node 18 runtime.

## Update the listing

- Sales sheet wording, transcribed verbatim from the supplied document: `src/sales-sheet.json`.
- Layout, supplemental room details, and the contact email: `src/App.jsx`.
- Photo ordering and descriptions: `src/property.js`.
- Actual property images: `public/photos/` (14 photos imported from the supplied iCloud album).
- Styles: `src/App.css` and `src/index.css`.
- Page title and description: `index.html`.

The sales sheet's full descriptive paragraphs are displayed verbatim across the page. Room details and the address come from the owner's separate messages. Relative renovation dates in those supplemental room details have been omitted to prevent stale copy. The three supplied upper-deck measurements are retained without inferring an area or configuration.

Showing links open an email draft; the site does not send messages or store inquiries. The location link opens Google Maps. Images are hosted locally, independent of iCloud link expiration. Deploy the generated `dist/` folder to a static host. The Vite base is `/`; adjust it if deploying under a subdirectory.
