<script>
  import Library from "./library/Library.svelte";

  function handleClick(id) {
    console.log("clicked", id);
  }
</script>

<style>

</style>

<main>
  <Library onClick={handleClick} />
</main>
