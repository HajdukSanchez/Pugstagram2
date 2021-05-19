<script>
  import { onMount } from "svelte";

  import Header from "../components/Header.svelte";
  import Main from "../components/Main.svelte";
  import Timeline from "../components/Timeline.svelte";
  import Sidebar from "../components/Sidebar.svelte";

  const data = {};
  const API = "https://us-central1-pugstagram-co.cloudfunctions.net/data";

  onMount(async () => {
    const response = await fetch(API);
    data = await response.json();
  });
</script>

<Header />
<Main>
  <Timeline posts={data.posts} />
  <Sidebar {...data.user} />
  <!-- <Sidebar {...data.user} /> -->
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
