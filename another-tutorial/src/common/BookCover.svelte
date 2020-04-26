<script>
  export let book = {};

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
</style>

<a href="#" class="book">
  <span
    class="cover"
    style={isValidUrl(book.cover) ? `background-image: url(${book.cover})` : ''}>
    <span class="title">{book.title || ''}</span>
    <span class="description">{book.description || ''}</span>
  </span>
</a>
