<script>
  // event example:
  let h1Message = 'Welcome';
  function clickEvent() {
    h1Message = 'You clicked on a button that triggered a variable to change!';
  }

  // if, else if, else example:
  let fruit = {
    type: 'coconut',
  };

  // each, as, index example:
  let persons = [
    { status: 'someone', tagline: 'Yo sup' },
    { status: 'somebody', tagline: 'Gnarly, man' },
    { status: 'anyone', tagline: 'Watchoo want?' },
  ];

  // 2-way binding example:
  let name = 'Edit this text';
  let status = false;
  window.onload = function() {
    document.getElementById('2-way-binding-example').focus();
  }

  // stores example:
  import {someProperty} from '../stores.js';
  let the_store_status;
  const storeProperty = someProperty.subscribe((value) => {
    the_store_status = value;
  });
  function changeStore() {
    someProperty.update((value) => {
      return 'You updated the store value by hovering over this h1 tag.';
    });
  }
  import {onDestroy} from 'svelte'; // avoid memory leaks with unsubscribe:
  onDestroy(storeProperty); // storeProperty has .subscribe and .update (see above)

  // fetch example:
  import {onMount} from 'svelte';
  let data = [];
  onMount(async function() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await response.json();
    data = json;
  });
</script>



<style>
  code {
    color: lime;
    background: black;
    padding: 5px;
    border-radius: 5px;
  }
  .yellow-text {
    color: yellow;
  }
  .green-text {
    color: lime;
  }
  #store-hover:hover {
    color: lightgreen;
  }
</style>



<!-- event example: -->
<h1>{h1Message}</h1>
<button on:click={clickEvent}>Click me</button>

<!-- if, else if, else example: -->
{#if fruit.type == 'apple'}
  <h2>The fruit is an apple!!!</h2>
{:else if fruit.type == 'banana'}
  <h2>The fruit is a banana!!!</h2>
{:else}
  <h2>{fruit.type}</h2>
{/if}

<!-- each, as, index example: -->
<ul>
  {#each persons as {status, tagline}, index}
    <li>{index + 1}: <strong>{status}</strong> ({tagline})</li>
  {/each}
</ul>

<!-- 2-way binding example: -->
<h2>{name}</h2>
<!-- this binds the input value to the variable name: -->
<input id="2-way-binding-example" type="text" bind:value={name}>
<label class:green-text={status} class:yellow-text={!status}>
  <!-- this binds the input checked value to the variable status: -->
  <input type="checkbox" bind:checked={status}>
  Do you want to learn more Svelte?
</label>
{#if status}
  <p>Of course I want to learn more.</p>
{:else}
  <p>Not today.</p>
{/if}

<!-- stores example: -->
<h2 id="store-hover" on:mouseover={changeStore}>{the_store_status}</h2>
<br/>

<!-- fetch example: -->
<h2>The following data is fetched from <code>https://jsonplaceholder.typicode.com/posts</code>:</h2>
<ul>
  {#each data.slice(0, 20) as {title}}
    <li>
      <p>{title}</p>
    </li>
  {/each}
</ul>
