(function(){
  var D=window.CURVA, $=function(s,r){return (r||document).querySelector(s)};
  function th(id){return "https://i.ytimg.com/vi/"+id+"/hqdefault.jpg"}
  function epTitle(e){return e[2]?e[1]+" · #"+e[2]:e[1]}
  function card(e){
    var a=document.createElement("article");a.className="ep";
    a.innerHTML='<button class="thumb" aria-label="נגן: '+e[1].replace(/"/g,"&quot;")+'" data-id="'+e[0]+'"><img loading="lazy" alt="" src="'+th(e[0])+'"><span class="pbtn" aria-hidden="true"></span></button>'+
      '<div class="meta"><span class="num">'+(e[2]?"פרק "+e[2]:"מיוחד")+'</span><h3>'+e[1]+'</h3><span class="views">'+e[3]+' צפיות</span></div>';
    return a;
  }
  function play(btn){
    var id=btn.getAttribute("data-id");
    var f=document.createElement("iframe");
    f.src="https://www.youtube-nocookie.com/embed/"+id+"?autoplay=1&rel=0";
    f.allow="autoplay; encrypted-media; picture-in-picture; fullscreen";f.allowFullscreen=true;f.title="נגן וידאו";
    btn.replaceWith(f);
  }
  document.addEventListener("click",function(ev){
    var b=ev.target.closest(".thumb");if(b)play(b);
    var c=ev.target.closest("[data-copy]");
    if(c){var t=c.getAttribute("data-copy");
      (navigator.clipboard?navigator.clipboard.writeText(t):Promise.reject()).then(function(){c.textContent="הועתק"},function(){window.prompt&&0;c.textContent="סמנו והעתיקו"});
      setTimeout(function(){c.textContent="העתקת RSS"},1800)}
  });
  var feat=$("#featured");
  if(feat){var e=D.episodes[0];
    feat.innerHTML='<button class="thumb" data-id="'+e[0]+'" aria-label="נגן את הפרק האחרון"><img alt="" src="'+th(e[0])+'"><span class="pbtn" aria-hidden="true"></span></button>';
    $("#feat-title").textContent=epTitle(e);}
  var latest=$("#latest");
  if(latest)D.episodes.slice(1,7).forEach(function(e){latest.appendChild(card(e))});
  var all=$("#all");
  if(all){
    var q=$("#q"),count=$("#count");
    function render(){
      var v=(q.value||"").trim();all.innerHTML="";var n=0;
      D.episodes.forEach(function(e){
        if(v&&(e[1]+" "+(e[2]||"")).indexOf(v)<0)return;
        all.appendChild(card(e));n++});
      count.textContent=n+" פרקים";
      if(!n)all.innerHTML='<p class="empty">לא נמצא פרק כזה. נסו מילה אחרת.</p>';
    }
    q.addEventListener("input",render);render();
  }
  var hosts=$("#hosts");
  if(hosts)D.hosts.forEach(function(h){var d=document.createElement("div");d.className="host";
    d.innerHTML='<span class="avatar" aria-hidden="true">'+h.initial+'</span><h3>'+h.name+'</h3><p>'+h.role+'</p>';hosts.appendChild(d)});
  var posts=$("#posts");
  if(posts)D.posts.forEach(function(p){var a=document.createElement("article");a.className="post";
    a.innerHTML='<span class="tag">'+p.tag+'</span><h3>'+p.title+'</h3>'+p.body.map(function(t){return "<p>"+t+"</p>"}).join("")+
      (p.ep?'<a class="link" href="https://www.youtube.com/watch?v='+p.ep+'" target="_blank" rel="noopener">לצפייה בפרק</a>':"")+'<span class="sample">פוסט לדוגמה</span>';
    posts.appendChild(a)});
  var ticker=$("#ticker");
  if(ticker){var s=D.episodes.slice(0,12).map(function(e){return "<span>"+e[1]+"</span>"}).join("");ticker.innerHTML="<div class='tr'>"+s+s+"</div>"}
  var rss=document.querySelectorAll("[data-copy]");rss.forEach(function(b){b.setAttribute("data-copy",D.rss)});
  document.querySelectorAll("[data-link]").forEach(function(a){a.href=D[a.getAttribute("data-link")]});
})();
