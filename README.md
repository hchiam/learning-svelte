# Learning Svelte

Just one of the things I'm learning. <https://github.com/hchiam/learning>

Svelte = Compiler! Less boilerplate and generate small files at build time instead of at run time. It also does _*not*_ ship a runtime (a thing that knows how to run your framework-targeted code) alongside your code that you send to the browser, which other frameworks do. For me, it's like React in that it goes one step further in the trend: logically group together related JS, markup, [_and style_](https://css-tricks.com/what-i-like-about-writing-styles-with-svelte) (optionally, but scoped by default). It's performant and productive.

Learn from the interactive tutorial: <https://svelte.dev/tutorial>

Try out editable demos like this: <https://svelte.dev/examples#spread-props>

App template: <https://github.com/sveltejs/template> (hence `sveltejs/template` in the CLI commands below to get the latest template code)

Component template: <https://github.com/sveltejs/component-template>

Webpack template (instead of rollup default): <https://github.com/sveltejs/template-webpack>

Setup tutorial: <https://svelte.dev/blog/svelte-for-new-developers>

YGLF talk: <https://www.youtube.com/watch?v=AdNJ3fydeao>

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

You might be interested in [Sapper](https://github.com/hchiam/learning-sapper), a web app dev framework powered by Svelte.

## Svelte useful built-ins

```js
// Svelte makes use JavaScript's built-in label to make reactive variables and function calls:
let a = 1;
$: b = 2;
a = 3; // b = 4
// it's not only limited to declarations, you can also have arbitrary statements:
$: console.log("b is now: " + b); // good for debugging changing values
```

```js
// onMount:
import { onMount } from "svelte";
let data = [];
onMount(async function () {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const json = await response.json();
  data = json;
});
```

```js
// createEventDispatcher:
import { createEventDispatcher } from "svelte";
const dispatch = createEventDispatcher();
```

Custom event listener format: `<TagName on:custom-event />` and `{() => dispatch('custom-event', { someData: something.someValue })}` (dispatching component events is more idiomatic to Svelte than using callbacks between parent and children).

## Svelte life cycle methods reference

- `onMount` (most commonly-used, happens right after element is first rendered into DOM)
- `onDestroy`
- `beforeUpdate`
- `afterUpdate`
- `tick`

## Svelte transitions

```html
<script>
  import { fade, fly } from "svelte/transition";
  let visible = true;
</script>

<label>
  <input type="checkbox" bind:checked="{visible}" />
  visible
</label>

{#if visible}
<p transition:fly="{{y:250}}">
  Transition!
</p>
{/if}
```

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

## Pluralsight tutorial: <https://github.com/jaketrent/svelte-getting-started>

`json-server`, `npm-run-all`, `svelte-routing`

```json
{
  "build": "rollup -c",
  "dev": "run-p dev:server dev:client # dev was just: rollup -c -w",
  "dev:server": "json-server --watch db.json",
  "dev:client": "rollup -c -w",
  "start": "sirv public --single"
}
```

Note that the data in the `db.json` file actually changes when you hit "Favorite/Unfavorite".

<http://localhost:5000>

### Routing: `svelte-routing`, `let:params`, `use:links`

- ```js
  import { Route, Router } from "svelte-routing";
  import { links } from "svelte-routing";`;
  ```

- ```html
  <Route path="/books/:id" let:params>
    <Detail id="{params.id}" />
  </Route>
  ```

- ```html
  <a href={"/books/" + book.id} use:links></a>
  ```

- `sirv public --single` (see package.json)

### Slot

```html
<button on:click={() => clicks++}>
  <!-- slot is actually native HTML! -->
  <slot />
</button>
```

So you can do things like:

```html
<button>+ Add book</button>
```

```

```
