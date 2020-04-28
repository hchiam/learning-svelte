<script>
  import Button from "./Button.svelte";
</script>

<style>
  nav {
    display: flex;
    align-items: center;
    text-transform: uppercase;
  }
  .text {
    margin-left: 1rem;
  }
  span {
    font-weight: bold;
  }
</style>

<nav>
  <Button to="/">&lt; Back</Button>
  <div class="text">
    To the
    <span>Library</span>
  </div>
</nav>
