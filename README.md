# Blog Corso Web

## Requisiti

> [!IMPORTANT]
> Per utilizzare questo progetto è necessario avere installato [Node.js](https://nodejs.org/en/download/), [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) e [Git](https://git-scm.com/downloads).

Node 20.x è sufficiente per eseguire il progetto.

## Tecnologie Usate

- Svelte 5 (Framework)
- SvelteKit (Meta Framework)
- Tailwind CSS (Stile)
- TypeScript (Linguaggio)

## Installazione

Per scaricare il progetto è sufficiente aprire il terminale e navigare in una cartella desiderata. Quindi esegui questo comando:

```bash
git clone https://github.com/lascuolaopensource/blog-corso-web.git
```

> [!TIP]
> è possibile scaricare il tutto direttamente dal [sito GitHub](https://github.com/lascuolaopensource/blog-corso-web) tramite il pulsante verde "Code". Esplora le opzioni di download per scaricare il progetto in diverse modalità (zip, GitHub Desktop, ecc.).

Una volta clonato il progetto sul tuo computer sarà necessario muoversi nella cartella appena scaricata e installare le dipendenze con il seguente comando:

```bash
npm install
```

## Avvio

Per avviare il progetto è sufficiente eseguire il comando:

```bash
npm run dev
```

Potrai vedere il sito all'indirizzo [http://localhost:5173](http://localhost:5173).

## Struttura del progetto

Il progetto è strutturato in vari file e cartelle:

- `src`: contiene il codice sorgente dell'applicazione.
- `static`: contiene le risorse statiche dell'applicazione.
- `src/routes`: contiene le pagine dell'applicazione.
- `src/lib`: contiene vari file di utilità e di funzionalità utili all'applicazione.
- `src/lib/types`: contiene tutti i `tipi` utili all'applicazione.
- `src/lib/components`: contiene i componenti riusabili in ogni pagina dell'applicazione.
