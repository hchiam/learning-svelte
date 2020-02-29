<script>
	import {Router, Route} from 'svelte-routing';
	import Header from './Header.svelte';
	import Index from './pages/Index.svelte';
	import About from './pages/About.svelte';
	export let url = '';
</script>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		background: #333;
		color: #eee;
	}
	.container {
		width: 80%;
		margin: 4em auto;
	}
</style>

<Header/>

<div class="container">
	<Router url="{url}">
		<Route path="*" component={Index}/>
		<Route path="/about" component={About}/>
	</Router>
</div>
