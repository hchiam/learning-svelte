<script>
  $: clicks = 0;
  $: console.log("clicks: " + clicks); // debug
</script>

<style>
  button {
    text-transform: uppercase;
  }
</style>

<button on:click={() => clicks++}>
  <!-- slot is actually native HTML! -->
  <slot />
</button>
