<script>
  import { Route, Router } from "svelte-routing";
  import Detail from "./detail/Detail.svelte";
  import Library from "./library/Library.svelte";

  export let url = "";
</script>

<Router {url}>
  <main>

    <!-- Route lets you use let:params -> so :id becomes params.id -->
    <Route path="/books/:id" let:params>
      <Detail id={params.id} />
    </Route>

    <Route path="/">
      <Library />
    </Route>

  </main>
</Router>
