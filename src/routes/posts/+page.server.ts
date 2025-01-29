import type { PostsType } from '$lib/types';

export const load = async () => {
	// 1. Facciamo una richiesta all'API per ottenere i post
	const database = await fetch('https://dummyjson.com/posts');
	// 2. Convertiamo la risposta in JSON
	const postsObject: PostsType = await database.json();
	// 3. Ritorniamo i post
	return {
		posts: postsObject.posts
	};
};
