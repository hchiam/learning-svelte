<script>
  import BookGrid from "./BookGrid.svelte";
  import Button from "../common/Button.svelte";

  import { httpGet } from "../common/api.js";
  let books = [];
  onMount(async function() {
    const { data } = await httpGet("/?_sort=id&_order=desc");
    books = data;
  });

  // fetch example:
  import { onMount } from "svelte";
  let data = [];
  onMount(async function() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await response.json();
    data = json;
  });

  export let onClick;
</script>

<style>
  h1 {
    margin: 0;
    font-size: 4rem;
  }
</style>

<header>
  <span class="preamble">Welcome to the</span>
  <h1>Library</h1>
</header>

<p class="greeting">
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dignissimos
  ullam blanditiis facilis neque possimus tempore sit?
</p>

<Button>+ Add book</Button>

<BookGrid {books} {onClick} />

<p>
  First result from
  <a href="https://jsonplaceholder.typicode.com/posts" target="_blank">
    https://jsonplaceholder.typicode.com/posts
  </a>
  : {JSON.stringify(data[0])}
</p>
