<!--
  Questa è la pagina di layout principale dell'applicazione.
  Serve come template di base per tutte le altre pagine del sito.
  
  Il layout definisce la struttura comune che sarà presente in ogni pagina, nel nostro caso:
  - Una navbar in alto per la navigazione
  - Un contenitore principale al centro che mostrerà il contenuto specifico di ogni pagina
  - Un footer in basso
  
  In questo modo, non dobbiamo ripetere questi elementi comuni in ogni pagina,
  ma vengono automaticamente inclusi grazie al layout.
-->

<script lang="ts">
	// Import dei componenti Footer e Navbar
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	// Import dello stile globale
	import '../app.css';
	// Ottiene i children dalle props
	let { children } = $props();
</script>

<!-- Container principale con padding -->
<div class="px-4 py-2">

	<Navbar />

	<div class="py-4">
		<!-- Qui viene mostrato il contenuto della pagina che stai visitando. -->
		<!-- Per esempio, se vai su /posts vedrai la lista dei post, se vai sulla home vedrai il messaggio di benvenuto -->
		{@render children()}
	</div>

	<Footer />
</div>
