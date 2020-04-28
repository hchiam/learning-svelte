<script>
  import BackButtonRow from "../common/BackButtonRow.svelte";
  import BookCover from "../common/BookCover.svelte";
  import Button from "../common/Button.svelte";
  import Header from "../common/Header.svelte";
  import TextInput from "./TextInput.svelte";
  import { httpPost } from "../common/api.js";
  import { navigate } from "svelte-routing";

  let title = "";
  let author = "";
  let coverUrl = "";
  let description = "";

  $: book = { title, author, coverUrl, description };

  // $: console.log({ title, author, coverUrl, description });

  async function handleSubmit(event) {
    // event.preventDefault(); // no need with on:event-name|modifier={handle}
    const newBook = {
      ...book,
      favorite: false
    };
    const { ok } = await httpPost("/", newBook);
    if (ok) {
      navigate("/");
    }
  }
</script>

<BackButtonRow />

<Header element="h1" size="large">Create</Header>

<form on:submit|preventDefault={handleSubmit}>
  <div class="fields">
    <!-- just do the two-way bind:value={title}, instead of on:input={handleInput} value={title} -->
    <TextInput label="Title" bind:value={title} />
    <TextInput label="Author" bind:value={author} />
    <TextInput label="Cover URL" bind:value={coverUrl} />
    <TextInput label="Description" bind:value={description} multiline />
    <div>
      <Button>Save</Button>
    </div>
  </div>
  <div>
    <Header>Preview</Header>
    <div class="preview">
      <!-- $: book and {book} instead of: book={{ title, author, coverUrl, description }} -->
      <BookCover {book} />
    </div>
  </div>
</form>
