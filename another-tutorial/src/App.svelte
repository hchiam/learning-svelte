<script>
  import Library from "./library/Library.svelte";

  function handleBookSelect(id) {
    console.log("clicked", id);
  }
</script>

<style>

</style>

<main>
  <Library onBookSelect={handleBookSelect} />
</main>
