<script>
  import {Router, Link} from 'svelte-routing';
</script>

<style>
  header {
    display: flex;
    justify-content: space-between;
    background: rgb(0, 195, 255);
  }
  nav ul {
    display: flex;
    list-style-type: none;
    margin: 0;
  }
  :global(header a) { /* <Link> */
    padding: 1em;
    display: block;
    color: white !important;
  }
  :global(header > a) { /* <Link>: MyApp! */
    font-weight: bold;
  }
</style>

<header>
  <Router>
    <Link to="/">MyApp!</Link>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  </Router>
</header>
