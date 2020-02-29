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

<img src="https://github.com/hchiam/learning-svelte/blob/master/youtube-tutorial/dependencygraph.svg" alt="Dependency Graph of this Folder for the YouTube Svelte Tutorial Demo"/>
