<script>
  // // svelte-routing replaces the need for:
  // import { createEventDispatcher } from "svelte";
  // const dispatch = createEventDispatcher();

  // Use svelte-routing's links to make it aware of the <a> tag below by using a use:links action function
  import { links } from "svelte-routing";

  export let book = {};
  export let interactive = false;

  function isValidUrl(url) {
    return url && /http.+\.(jpg|png|gif)$/.test(url);
  }
</script>

<style>
  .book {
    text-decoration: none;
    background: maroon;
    color: white;
    padding: 1rem;
  }

  .title,
  .description {
    margin-bottom: 1rem;
    display: block;
  }

  a {
    /* make the click area wider with these attributes: */
    display: inline-block;
    position: relative;
    z-index: 1;
    padding: 2em;
  }

  #flips:hover {
    transform: skewY(-10deg);
    transform-origin: 0 100%;
    transition: 0.25s;
  }
</style>

{#if interactive}
  <div id="flips">
    <a href={'/books/' + book.id} use:links class="book">
      <!-- svelte-routing replaces the need for: on:click={() => dispatch('book-select', { id: book.id })} 
      so you can do this instead: href={'/books/' + book.id} use:links -->
      <span
        class="cover"
        style={isValidUrl(book.cover) ? `background-image: url(${book.cover})` : ''}>
        <span class="title">{book.title || ''}</span>
        <span class="description">{book.description || ''}</span>
      </span>
    </a>
  </div>
{:else}
  <div class="book" on:click={() => dispatch('book-select', { id: book.id })}>
    <span
      class="cover"
      style={isValidUrl(book.cover) ? `background-image: url(${book.cover})` : ''}>
      <span class="title">{book.title || ''}</span>
      <span class="description">{book.description || ''}</span>
    </span>
  </div>
{/if}
