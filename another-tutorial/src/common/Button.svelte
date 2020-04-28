<script>
  import { links } from "svelte-routing";

  export let to;
</script>

<style>
  button,
  a {
    text-transform: uppercase;
    background: lightgrey;
    color: black;
    text-decoration: none;
    border-radius: 0.25rem;
    padding: 0.5rem;
    margin: 0;
  }
</style>

{#if to}
  <a on:click href={to} use:links>
    <!-- slot is actually native HTML! -->
    <slot />
  </a>
{:else}
  <button on:click>
    <!-- slot is actually native HTML! -->
    <slot />
  </button>
{/if}
