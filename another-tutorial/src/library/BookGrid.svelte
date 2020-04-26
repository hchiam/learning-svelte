<script>
  import BookCover from "../common/BookCover.svelte";
  import Heart from "./Heart.svelte";

  export let books = [];
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
</style>

<ul>
  {#each books as book}
    <li>
      <BookCover {book} />
      {#if book.favorite}
        <Heart />
      {/if}
    </li>
  {/each}
</ul>
