<script>
  import BookCover from "../common/BookCover.svelte";
  import Heart from "./Heart.svelte";

  export let books = [];
  export let onClick;
</script>

<style>
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, 10rem);
    gap: 10px;
    list-style: none;
  }
  li {
    background: maroon;
    color: white;
    padding: 1rem;
  }
  li:hover {
    transform: skewY(-10deg);
    transform-origin: 0 100%;
    transition: 0.25s;
  }
</style>

<ul>
  {#each books as book}
    <li>
      <BookCover {book} {onClick} />
      {#if book.favorite}
        <Heart />
      {/if}
    </li>
  {/each}
</ul>
