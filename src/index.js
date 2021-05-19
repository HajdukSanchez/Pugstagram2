import App from "./containers/App.svelte";

// This is the way that we initialize our svlete application
const app = new App({
  target: document.querySelector("main"),
});

export default app;
