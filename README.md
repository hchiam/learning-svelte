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

From DesignCourse: <https://www.youtube.com/watch?v=BZzBtzl6aq4>

## Other notes

You can generate a [dependency graph](https://github.com/hchiam/learning-dependency-cruiser) with `bash show_dep_graph.sh`.

This file was first created using the Yeoman generator [`generator-hchiam-learning`](https://www.npmjs.com/package/generator-hchiam-learning).
