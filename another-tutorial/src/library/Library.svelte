<script>
  import BookGrid from "./BookGrid.svelte";
  import Button from "../common/Button.svelte";

  const books = [
    {
      id: 1,
      title: "A great book",
      description: "A description of a great book.",
      favorite: true
    },
    {
      id: 2,
      title: "Better book",
      description: "This one's a better book.",
      favorite: false
    },
    {
      id: 3,
      title: "Cool cook book",
      description: "Cook cool food quick. Cool!",
      favorite: false
    }
  ];
</script>

<style>
  h1 {
    margin: 0;
    font-size: 4rem;
  }
</style>

<header>
  <span class="preamble">Welcome to the</span>
  <h1>Library</h1>
</header>

<p class="greeting">
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dignissimos
  ullam blanditiis facilis neque possimus tempore sit?
</p>

<Button>+ Add book</Button>

<BookGrid {books} />
