
# BeatLeader Twitch panel

Wireframe design: https://www.figma.com/file/DUoubAiS7LIAf3DNVVLBG4/Untitled

## Running

You need to have Deno v1.28.0 or later installed to run this repo.

Start a dev server:

```
$ deno task dev
```

## Deploy

Build production assets:

```
$ deno task build
```

## Papercuts

Currently there's a "papercut" for Deno users:

- peer dependencies need to be referenced in `vite.config.js` - in this example
  it is `react` and `react-dom` packages that need to be referenced

## Credits

https://github.com/BeatLeader/beatleader-website main source for the UI.