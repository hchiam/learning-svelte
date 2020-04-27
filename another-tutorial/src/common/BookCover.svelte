<script>
  import { createEventDispatcher } from "svelte";

  export let book = {};

  const dispatch = createEventDispatcher();

  function isValidUrl(url) {
    return url && /http.+\.(jpg|png|gif)$/.test(url);
  }
</script>

<style>
  .book {
    text-decoration: none;
    color: white;
    padding-bottom: 1rem;
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
    margin: -2em;
  }
</style>

<a
  href="#"
  class="book"
  on:click={() => dispatch('book-select', { id: book.id })}>
  <span
    class="cover"
    style={isValidUrl(book.cover) ? `background-image: url(${book.cover})` : ''}>
    <span class="title">{book.title || ''}</span>
    <span class="description">{book.description || ''}</span>
  </span>
</a>
