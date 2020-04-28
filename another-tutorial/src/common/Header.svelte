<script>
  export let element = "h2";
  export let size = "medium";
</script>

<style>
  h1,
  h2 {
    text-transform: uppercase;
    font-weight: bold;
  }
  .medium {
    font-size: medium;
  }
  .large {
    font-size: large;
  }
</style>

{#if element === 'h1'}
  <h1 class={size}>
    <slot />
  </h1>
{:else if element === 'h2'}
  <h2 class={size}>
    <slot />
  </h2>
{/if}
