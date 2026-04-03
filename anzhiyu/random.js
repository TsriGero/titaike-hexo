var posts=["2026/04/04/hello-world/","2026/04/04/ces-1775234924792/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };