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
  @import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");
  :global(body) {
    margin: 0;
    padding: 0;
    background-color: #fafafa;
    color: rgba(38, 38, 38, 0.7);
    font-family: "lato", sans-serif;
  }
  :global(h1, h2, h3) {
    margin: 0;
    padding: 0;
  }
</style>
