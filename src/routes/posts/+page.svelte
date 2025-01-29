<!--
  Questa è la pagina che mostra tutti i post del blog.
  È composta da:
  - Uno script che carica i dati dei post
  - Un titolo
  - Una griglia che mostra i post utilizzando il componente Post
-->

<script lang="ts">
	// Importiamo le funzionalità necessarie:
	// - onMount per eseguire codice quando la pagina viene caricata
	// - PostsType per definire il tipo dei nostri dati
	// - Il componente Post che useremo per mostrare ogni singolo post
	import Post from '$lib/components/Post.svelte';

	// Riceviamo i dati dal server `+page.server.ts`.
	// IMPORTANTE: usare `{data}` quando si ricevono dati da una `load` function.
	let { data } = $props();

	// Riempiamo la variabile `posts` con i dati ricevuti dal server
	const posts = data.posts;
</script>

<!-- Titolo della pagina con stile Tailwind per dimensione e peso del font -->
<h1 class="text-2xl font-semibold">Posts</h1>

<!-- 
  Griglia di post con 4 colonne e spazio tra gli elementi.
  Mostriamo i post solo se sono stati caricati (postsObject?.posts esiste)
-->
<div class="grid grid-cols-4 gap-4">
	{#if posts}
		{#each posts as post}
			<!-- Per ogni post, usiamo il componente Post passandogli i dati del post -->
			<Post {post} />
		{/each}
	{/if}
</div>
