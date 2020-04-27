# Learning Svelte

Just one of the things I'm learning. <https://github.com/hchiam/learning>

Svelte = Compiler! Less boilerplate and generate small files at build time instead of at run time. It also does _*not*_ ship a runtime (a thing that knows how to run your framework-targeted code) alongside your code that you send to the browser, which other frameworks do. For me, it's like React in that it goes one step further in the trend: logically group together related JS, markup, [_and style_](https://css-tricks.com/what-i-like-about-writing-styles-with-svelte) (optionally, but scoped by default).

Learn from the interactive tutorial: <https://svelte.dev/tutorial>

Try out editable demos like this: <https://svelte.dev/examples#spread-props>

App template: <https://github.com/sveltejs/template> (hence `sveltejs/template` in the CLI commands below to get the latest template code)

Component template: <https://github.com/sveltejs/component-template>

Webpack template (instead of rollup default): <https://github.com/sveltejs/template-webpack>

Setup tutorial: <https://svelte.dev/blog/svelte-for-new-developers>

```bash
# npx degit github-repo-name name-of-folder-to-create
npx degit sveltejs/template my-svelte-project
cd my-svelte-project
npm install
npm run dev # -> http://localhost:5000
```

Try editing + saving src/App.svelte (app will auto-reload changes).

Then when you're ready for production:

```bash
# cd my-svelte-project
npm run build # -> bundle.js
npm run start # -> http://localhost:5000
```

`rollup.config.js` -> `main.js` -> `App.svelte` -> ...

`src/` (files to be compiled) -> `public/` (files already compiled or don't need to compile)

## Svelte life cycle methods reference

- `onMount` (most commonly-used, happens right after element is first rendered into DOM)
- `onDestroy`
- `beforeUpdate`
- `afterUpdate`
- `tick`

## [My take on a YouTube tutorial](https://github.com/hchiam/learning-svelte/tree/master/youtube-tutorial)

From DesignCourse: <https://www.youtube.com/watch?v=BZzBtzl6aq4> (Note: this video is at least a year old now. Instead of `svero`, I'm using [`svelte-routing`](https://github.com/EmilTholin/svelte-routing): <https://www.youtube.com/watch?v=P1hxkpf8kCA>)

```bash
npx degit sveltejs/template youtube-tutorial
cd youtube-tutorial
npm install
npm install --save svelte-routing
npm run dev # -> http://localhost:5000
```

Try editing + saving src/App.svelte (app will auto-reload changes).

Then when you're ready for production:

```bash
# cd my-svelte-project
npm run build # -> public/build/bundle.js
npm run start # -> http://localhost:5000
```

And publish to a live demo:

```bash
bash publish_live_site.sh
# https://hchiam-svelte-youtube-tutorial-demo.surge.sh/
```

<https://hchiam-svelte-youtube-tutorial-demo.surge.sh>
