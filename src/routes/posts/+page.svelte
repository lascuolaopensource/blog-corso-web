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
	import { onMount } from 'svelte';
	import type { PostsType } from '$lib/types';
	import Post from '$lib/components/Post.svelte';

	// Creiamo una variabile per contenere i post
	// Inizialmente è undefined perché i dati non sono ancora stati caricati
	let postsObject: PostsType | undefined = undefined;

	// Quando la pagina viene caricata (onMount):
	// 1. Facciamo una richiesta all'API per ottenere i post
	// 2. Convertiamo la risposta in JSON
	// 3. Salviamo i dati nella nostra variabile postsObject
	onMount(async () => {
		const response = await fetch('https://dummyjson.com/posts');
		postsObject = await response.json();
	});
</script>

<!-- Titolo della pagina con stile Tailwind per dimensione e peso del font -->
<h1 class="text-2xl font-semibold">Posts</h1>

<!-- 
  Griglia di post con 4 colonne e spazio tra gli elementi.
  Mostriamo i post solo se sono stati caricati (postsObject?.posts esiste)
-->
<div class="grid grid-cols-4 gap-4">
	{#if postsObject?.posts}
		{#each postsObject.posts as post}
			<!-- Per ogni post, usiamo il componente Post passandogli i dati del post -->
			<Post {post} />
		{/each}
	{/if}
</div>
