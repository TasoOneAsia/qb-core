## What is This?

Although QB is written primarily in Lua, ocassionally a more comprehensive
language is needed to fill in the gaps for more complex logic/handling. This will
be the location for any complex logic or IO unable to be adequately handled by
CfxLua/Lua scripts.

## V8 Folder
The V8 folder contains all of the source code for any V8 delegated tasks. It
is written in TypeScript & bundled using `esbuild`

To keep things simple, we use the default `npm` package manager shipped with Node.

## Building

**Install Dependencies**
```sh
npm i
```

**Watch Mode**
```sh
npm run dev
```

**Prod Build**
```sh
npm run build
```