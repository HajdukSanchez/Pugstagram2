<div class="Main">
  <div class="Main-container">
    <!-- We use the slot to accpet child content from other elements -->
    <slot />
  </div>
</div>

<style>
  .Main {
    display: grid;
    grid-template-columns: minmax(auto, 936px);
    justify-content: center;
    background-color: #fafafa;
  }
  .Main-container {
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-gap: 2em;
    padding: 2em 0;
  }
</style>
