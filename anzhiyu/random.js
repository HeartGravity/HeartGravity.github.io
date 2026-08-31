var posts=["2026/08/31/GRU4Rec——将RNN融入会话推荐/","2026/08/31/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };