<script>
  import BackButtonRow from "../common/BackButtonRow.svelte";
  import BookCover from "../common/BookCover.svelte";
  import Button from "../common/Button.svelte";
  import Header from "../common/Header.svelte";

  import { onMount } from "svelte";
  import { httpGet, httpPut } from "../common/api.js";

  export let id;

  let book = {};
  onMount(async () => {
    const { data } = await httpGet("/" + id);
    book = data;
  });

  async function handleFavoriteClick() {
    const toggledBook = {
      ...book,
      favorite: !book.favorite
    };
    const { ok } = await httpPut("/" + book.id, toggledBook);
    if (ok) {
      book = toggledBook;
    }
  }
</script>

<style>
  .detail {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(40vw, 20rem));
    grid-template-rows: minmax(16vw, 8rem) auto;
    gap: 1rem;
  }
  .cover {
    position: relative;
    display: flex;
  }
  .favorite {
    position: absolute;
    width: 90%;
    left: 1rem;
    bottom: 1rem;
  }
</style>

<BackButtonRow />

<Header element="h1" size="large">Discover</Header>

<div class="detail">
  <div class="cover">
    <BookCover {book} />
    <div class="favorite">
      <Button on:click={handleFavoriteClick}>
        {book.favorite ? 'Unfavorite' : 'Favorite'}
      </Button>
    </div>
  </div>
  <div>
    <Header>About</Header>
    <p>{book.description}</p>
  </div>
</div>
