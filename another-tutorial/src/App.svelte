<script>
  import Library from "./library/Library.svelte";

  function handleBookSelect(event) {
    console.log("clicked", event.detail.id);
  }
</script>

<style>

</style>

<main>
  <Library on:book-select={handleBookSelect} />
</main>
