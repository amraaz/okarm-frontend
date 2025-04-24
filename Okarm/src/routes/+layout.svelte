<script>
	import '../app.css';
	let { children } = $props();
</script>
<div>
	<a href="/" class="outline-2 outline-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition duration-200">home</a>
	<br/>
	<br/>
	<br/>
	{@render children()}
</div>

