<script>
  export let label;
  export let value; // !: note must export for bind:value prop forwarding to work!
  export let multiline = false;
</script>

<style>
  input,
  textarea {
    display: block;
    width: 100%;
    margin: 0.25rem 0 1rem;
  }
  textarea {
    height: 8rem;
  }
</style>

<label>
  {label}
  {#if multiline}
    <textarea bind:value />
  {:else}
    <input type="text" bind:value />
  {/if}
</label>
