# Sentence Weaver [RanSen]
A small app that turns words, letters, and quoted phrases into a set of generated sentences.

## Try it
Open the app with `npm run dev` and generate sentences from your input.

## Quick start
```bash
npm install
npm run dev
```
Then open the local Vite URL shown in your terminal.

## Features
- Paste a list of words, letters, and quoted phrases
- Generate 3 sentence variations at once
- Adjust target sentence length with a simple stepper
- Copy generated text to the clipboard with one click

## Run locally
- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Build for production: `npm run build`

## How it works
The app parses the input into tokens and phrases, classifies them, then assembles sentence candidates and post-processes them into readable output. The UI is built with React + Vite for fast local iteration.

## Credits
Built with React, Vite, TypeScript and a lot of ragebait
