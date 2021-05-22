<script>
  import Main from "../components/Main.svelte";

  export let status;
  export let error;

  const dev = process.env.NODE_ENV === "development";
</script>

<svelte:head>
  <title>{status}</title>
</svelte:head>

<Main>
  <div class="Error">
    <h1>{status}</h1>
    <p>{error.message}</p>
    <!-- // This is a message to show the error only in development mode because of the DEV variable -->
    {#if dev && error.stack}
      <p>{error.stack}</p>
    {/if}
  </div>
</Main>

<style>
  .Error {
    padding: 4em 0 0 0;
  }

  h1,
  p {
    margin: 0 auto;
  }

  h1 {
    margin: 0 0 0.5em 0;
    font-size: 2.8em;
    font-weight: bold;
  }
</style>
