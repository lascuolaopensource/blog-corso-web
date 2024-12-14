<script lang="ts">
	import { onMount } from 'svelte';
	import type { PostsType } from '$lib/types';
	import Post from '$lib/components/Post.svelte';

	let postsObject: PostsType | undefined = undefined;

	onMount(async () => {
		const response = await fetch('https://dummyjson.com/posts');
		postsObject = await response.json();
	});
</script>

<h1 class="text-2xl font-semibold">Posts</h1>

<div class="grid grid-cols-4 gap-4">
	{#if postsObject?.posts}
		{#each postsObject.posts as post}
			<Post {post} />
		{/each}
	{/if}
</div>
