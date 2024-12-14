<script lang="ts">
	import type { PostType } from '$lib/types';

	let { post }: { post: PostType } = $props();
</script>

<div class="flex flex-col gap-2 rounded-lg border border-black/60 p-4">
	<h2 class="text-xl font-semibold">{post.title}</h2>
	<p class="text-sm">{post.body}</p>
</div>
