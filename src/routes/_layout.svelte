<script>
  import Header from "../components/Header.svelte";

  // With this props we can identify the route where we are
  export let segment;
</script>

<Header {segment} />
<!-- Principal component for add our application components-->
<main>
  <slot />
</main>
