<script>
  import Comments from "./Comments.svelte";
</script>

<div class="Card">
  <div class="Card-container">
    <div class="Card-header">
      <div class="Card-user">
        <img src="https://i.pinimg.com/originals/d0/7f/4b/d07f4b4a5cbc65b11ccb45b0c0fbfccd.jpg" alt="" />
        <h2>
          Elmo.pug
          <span>Bogotá, Colombia</span>
        </h2>
      </div>
      <div class="Card-settings">
        <i class="fas fa-ellipsis-h" />
      </div>
      <div class="Card-photo">
        <figure>
          <img src="https://i.pinimg.com/originals/d0/7f/4b/d07f4b4a5cbc65b11ccb45b0c0fbfccd.jpg" alt="" />
        </figure>
      </div>
      <div class="Card-icons">
        <div class="Card-icons-first">
          <i class="fas fa-heart" />
          <i class="fas fa-paper-plane" />
        </div>
        <div class="Card-icons-second">
          <i class="fas fa-bookmark" />
        </div>
        <div class="Card-description">
          <h3>Elmo.pug</h3>
          <span>Hello</span>
        </div>
        <Comments />
      </div>
    </div>
  </div>
</div>
