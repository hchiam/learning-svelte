# Learning Svelte

Just one of the things I'm learning. <https://github.com/hchiam/learning>

Svelte = Compiler! Less boilerplate and generate small files at build time instead of at run time. For me, it's like React in that it goes one step further in the trend: logically group together related JS, markup, [_and style_](https://css-tricks.com/what-i-like-about-writing-styles-with-svelte).

Learn from the interactive tutorial: <https://svelte.dev/tutorial>

Setup tutorial: <https://svelte.dev/blog/svelte-for-new-developers>

```bash
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

## YouTube tutorial

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
