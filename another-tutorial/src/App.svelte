<script>
  import Detail from "./detail/Detail.svelte";
  import Library from "./library/Library.svelte";

  let page = "detail";
  let pageArguments = { id: 1 };
  function handleBookSelect(event) {
    page = "detail";
    pageArguments = event.detail; // detail is specific to using svelte's createEventDispatcher()
    console.log(pageArguments);
  }
</script>

<style>

</style>

<main>
  {#if page === 'detail'}
    <Detail {...pageArguments} />
  {:else}
    <Library on:book-select={handleBookSelect} />
  {/if}
</main>
