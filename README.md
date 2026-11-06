# BUCKSBIN

**Recycle & Earn.**

BUCKSBIN is a smart Deposit Return System (DRS) for packaging. A consumer pays a refundable deposit, scans the package at a BUCKSBIN station, and gets the refund through UPI once the return is verified. This repository is the company website: a Vanilla JavaScript + Vite build with a scroll-driven exploded view of the machine.

## Features

- Hero with a render of the BUCKSBIN station that tilts with the cursor
- Scroll-driven exploded view: scrolling plays through frames of the machine coming apart, with a component panel for each stage
- Animated bottle-to-refund scene
- How It Works, Technology, Business Model, Impact and About sections
- Contact form with validation, loading and success states
- Loader, custom cursor, magnetic buttons, scrolling marquee, and page-transition wipe
- Smooth scrolling with Lenis and scroll animations with GSAP ScrollTrigger
- Respects `prefers-reduced-motion`

## Tech stack

- [Vite](https://vitejs.dev/)
- [GSAP](https://gsap.com/) and ScrollTrigger
- [Lenis](https://lenis.darkroom.engineering/)
- Plain CSS, one file per section

## Getting started

Requires [Node.js](https://nodejs.org/) 18 or newer.

```bash
npm install
npm run dev
```

Open the address Vite prints, usually http://localhost:5173.

To build for production:

```bash
npm run build
npm run preview
```

The production site is written to `dist/`.

## Project structure

```
index.html
public/assets/
  frames/            scroll-scrub frames for the exploded view
  images/            machine renders
src/
  main.js            assembles the sections and starts them
  core.js            GSAP, Lenis and shared helpers
  config.js          form API URL and social links
  sections/          one .html file (and .js where needed) per section
    navbar  hero  marquee  exploded  technology  how
    flow  business  impact  about  contact  footer
  animations/        loader, cursor, scroll reveals
  styles/            one .css file per section, plus base and responsive
```

## Configuration

Edit `src/config.js`:

```js
export const FORM_ENDPOINT = '';   // URL that accepts a JSON POST
export const SOCIAL = { linkedin: '', instagram: '' };
```

With `FORM_ENDPOINT` empty, the contact form validates input but does not send anything (demo mode). Set it to your API URL to receive enquiries as JSON with the fields `name`, `email`, `org`, `type` and `msg`.

Contact details in the page and footer are placeholders (`[OFFICIAL BUSINESS EMAIL]`, `[OFFICIAL BUSINESS PHONE]`, `[BUSINESS LOCATION]`). Replace them in `src/sections/contact.html` and `src/sections/footer.html`.

The impact dashboard shows editable placeholders, not real data. Replace them with verified figures when available.

## Updating the exploded view

The exploded view plays the images in `public/assets/frames/` (`001.webp`, `002.webp`, and so on). To use a new animation, export a video as numbered WebP frames, replace the files, then update the frame count in the `FR` line at the top of `src/sections/exploded.js` (currently 95). The component descriptions for each scroll stage are in `src/sections/exploded.js`.

## Deployment

Any static host works. On Vercel or Netlify, connect the repository and use:

- Build command: `npm run build`
- Output directory: `dist`

## License

All rights reserved. © 2026 BUCKSBIN.
