<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<div class="px-4 py-2">
	<Navbar />
	<div class="py-4">
		{@render children()}
	</div>
	<Footer />
</div>
