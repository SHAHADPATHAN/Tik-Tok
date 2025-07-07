<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title></title>
  <link rel="icon" href="TikTok.png" type="image/x-icon" />
  <link rel="stylesheet" href="style1.css" />
</head>

<body>

  <!-- TikTok Logo -->
  <img src="TikTok.png" alt="TikTok Logo" width="60" />

  <!-- Page Title -->
  <h1>Trending Shorts</h1>

  <!-- Scrollable Shorts Feed -->
  <div class="shorts-container">

    <!-- Video 1 -->
    <div class="short-card">
      <iframe width="250" height="200" src="https://www.youtube.com/embed/jr86nIYbiUs?si=heupfMjRK8uctOLQ"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
      <div class="video-info">
        <h3>@cutepaws</h3>
        <p>This cat is not okay 😹</p>
        <p class="hashtags">#funny #catlife #shorts</p>
      </div>
      <div class="reactions">
        <div class="icon-block"><span class="icon">❤️</span><div class="count">51.2K</div></div>
        <div class="icon-block"><span class="icon">💬</span><div class="count">2K</div></div>
        <div class="icon-block"><span class="icon">🔁</span><div class="count">289</div></div>
      </div>
    </div>

    <!-- Video 2 -->
    <div class="short-card">
      <iframe width="250" height="200" src="https://www.youtube.com/embed/DDW2hZD8QEw?si=8Zcu9rI8RNo0cjQ-"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
      <div class="video-info">
        <h3>@urbanflow</h3>
        <p>They really hit every beat 🔥</p>
        <p class="hashtags">#dance #streetstyle #trending</p>
      </div>
      <div class="reactions">
        <div class="icon-block"><span class="icon">❤️</span><div class="count">1.2K</div></div>
        <div class="icon-block"><span class="icon">💬</span><div class="count">245</div></div>
        <div class="icon-block"><span class="icon">🔁</span><div class="count">89</div></div>
      </div>
    </div>

    <!-- Local Video 3 -->
    <div class="short-card">
      <video width="250" height="200" controls>
        <source src="mehsana.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div class="video-info">
        <h3>@shahad_vlogs</h3>
        <p>Exploring the beauty of Mehsana city 🌆</p>
        <p class="hashtags">#mehsana #vlog #gujarat</p>
      </div>
      <div class="reactions">
        <div class="icon-block"><span class="icon">❤️</span><div class="count">98M</div></div>
        <div class="icon-block"><span class="icon">💬</span><div class="count">145K</div></div>
        <div class="icon-block"><span class="icon">🔁</span><div class="count">22K</div></div>
      </div>
    </div>

  </div>

  <!-- JS -->
  <script src="script.js"></script>
</body>

</html>
