<!-- 
  Navbar del sito con:
  - flex per disporre gli elementi in orizzontale
  - h-16 per l'altezza
  - w-full per occupare tutta la larghezza
  - items-center per centrare verticalmente gli elementi
  - justify-between per mettere spazio tra il logo e i link
-->
<div class="flex h-16 w-full flex-row items-center justify-between">
	<!-- 
	  Logo/link homepage con:
	  - text-4xl per dimensione grande
	  - font-bold per renderlo in grassetto
	-->
	<a href="/" class="text-4xl font-bold">Blog</a>

	<!-- 
	  Container dei link di navigazione con:
	  - flex e flex-row per disporre i link in orizzontale
	  - gap-4 per mettere spazio tra i link
	-->
	<div class="flex flex-row gap-4">
		<!-- 
		  Link alle varie sezioni con:
		  - text-black/50 per colore nero semi-trasparente
		  - hover:text-black per renderli neri al passaggio del mouse
		-->
		<a href="/posts" class="text-black/50 hover:text-black">Posts</a>
		<a href="/about" class="text-black/50 hover:text-black">About</a>
	</div>
</div>
