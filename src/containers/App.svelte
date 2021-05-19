<script>
  import Header from "../components/Header.svelte";
  import Main from "../components/Main.svelte";
  import Timeline from "../components/Timeline.svelte";
  import Sidebar from "../components/Sidebar.svelte";
</script>

<Header />
<Main>
  <Timeline />
  <Sidebar />
</Main>

<style>
  :global(body) {
    background-color: #676778;
    color: white;
  }
</style>
