<!--
  Questo è il componente Post che mostra un singolo post del blog.
  È composto da:
  - Uno script che riceve i dati del post come prop
  - Un layout che mostra il titolo e il contenuto del post
-->

<script lang="ts">
	// Importiamo il tipo PostType che definisce la struttura dei dati del post
	import type { PostType } from '$lib/types';

	// Riceviamo il post come prop dal componente genitore
	let { post }: { post: PostType } = $props();
</script>

<!-- 
  Container del post con:
  - flex e flex-col per disporre gli elementi in verticale
  - gap-2 per lo spazio tra gli elementi
  - rounded-lg per angoli arrotondati
  - border per il bordo nero semi-trasparente
  - p-4 per il padding interno
-->
<div class="flex flex-col gap-2 rounded-lg border border-black/60 p-4">
	<!-- Titolo del post con font più grande e in grassetto -->
	<h2 class="text-xl font-semibold">{post.title}</h2>
	<!-- Contenuto del post con testo più piccolo -->
	<p class="text-sm">{post.body}</p>
</div>
