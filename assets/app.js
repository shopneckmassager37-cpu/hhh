(function(){
  var D=window.CURVA,$=function(s,r){return (r||document).querySelector(s)};
  var SPRITE='<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>'+
  '<symbol id="i-scarf" viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><rect x="20" y="5" width="24" height="44" rx="2"/><path d="M20 17h24M20 29h24M20 41h24M25 49v9M32 49v9M39 49v9"/></g></symbol>'+
  '<symbol id="i-flare" viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><rect x="27" y="28" width="10" height="30" rx="2"/><path d="M32 4c9 11 13 15 7 24H25c-6-9-1-13 7-24z"/></g></symbol>'+
  '<symbol id="i-drum" viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="32" cy="20" rx="21" ry="8"/><path d="M11 20v24c0 4.4 9.4 8 21 8s21-3.6 21-8V20M16 27l8 20 8-20 8 20 8-20"/></g></symbol>'+
  '<symbol id="i-flag" viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M13 6v54M13 10c12-6 22 6 38 0v24c-16 6-26-6-38 0"/></g></symbol>'+
  '<symbol id="i-ball" viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="32" cy="32" r="25"/><path d="M32 22l9 6.5-3.5 10.5h-11L23 28.5zM32 22V8M41 28.5l14-4.5M37.5 39L46 51M26.5 39L18 51M23 28.5L9 24"/></g></symbol>'+
  '<symbol id="i-whistle" viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="38" r="16"/><circle cx="24" cy="38" r="4"/><path d="M38 28l20-6v10l-16 8M24 22V12"/></g></symbol>'+
  '<symbol id="i-trophy" viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 7h28v19c0 8-6 14-14 14s-14-6-14-14zM18 13H8c0 11 4 15 10 15M46 13h10c0 11-4 15-10 15M32 40v10M24 50h16M20 58h24"/></g></symbol>'+
  '<symbol id="i-boot" viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9h14v21l24 8c5 2 5 8 0 10H12c-2 0-4-2-4-4V15c0-4 2-6 6-6zM16 48v8M28 48v8M40 48v8"/></g></symbol>'+
  '<symbol id="i-yt" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"><rect x="4" y="10" width="40" height="28" rx="9"/><path d="M20 17l10 7-10 7z" fill="currentColor"/></g></symbol>'+
  '<symbol id="i-spot" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><circle cx="24" cy="24" r="19"/><path d="M13 18c8-3 16-2 22 2M15 25c6-2 13-1 18 2M16 32c5-1 10-1 14 1"/></g></symbol>'+
  '<symbol id="i-apple" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><circle cx="24" cy="24" r="19"/><circle cx="24" cy="20" r="4"/><path d="M24 26v10M19 36h10"/></g></symbol>'+
  '<symbol id="i-rss" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><circle cx="11" cy="37" r="3" fill="currentColor"/><path d="M8 22c10 0 18 8 18 18M8 9c18 0 31 13 31 31"/></g></symbol>'+
  '<symbol id="i-quiz" viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><circle cx="32" cy="32" r="25"/><path d="M24 25c0-5 4-8 8-8s8 3 8 8c0 6-8 6-8 12"/><circle cx="32" cy="46" r="1.5" fill="currentColor"/></g></symbol>'+
  '<symbol id="i-paint" viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"><rect x="6" y="10" width="52" height="44"/><path d="M6 24h52M6 38h52M23 10v44M41 10v44"/><rect x="23" y="24" width="18" height="14" fill="currentColor"/></g></symbol>'+
  '<symbol id="i-bingo" viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="6" width="52" height="52"/><path d="M6 23h52M6 40h52M23 6v52M40 6v52M27 31l4 4 8-9"/></g></symbol>'+
  '<symbol id="i-cards" viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"><rect x="6" y="10" width="22" height="30" rx="3"/><rect x="36" y="24" width="22" height="30" rx="3"/><circle cx="47" cy="39" r="5"/></g></symbol>'+
  '</defs></svg>';
  document.body.insertAdjacentHTML("afterbegin",SPRITE);
  function ic(id){return '<svg aria-hidden="true"><use href="#'+id+'"/></svg>'}
  function th(id){return "https://i.ytimg.com/vi/"+id+"/hqdefault.jpg"}
  function epTitle(e){return e[2]?e[1]+" · #"+e[2]:e[1]}
  var PLAY='<span class="pbtn" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M7 4l13 8-13 8z"/></svg></span>';
  function card(e){
    var a=document.createElement("article");a.className="ep";
    a.innerHTML='<div class="ticket cut"><button class="thumb" aria-label="נגן: '+e[1].replace(/"/g,"&quot;")+'" data-id="'+e[0]+'"><img loading="lazy" alt="" src="'+th(e[0])+'">'+PLAY+'</button></div>'+
      '<div class="row"><span class="big" aria-hidden="true">'+(e[2]||"+")+'</span><div><h3>'+e[1]+'</h3><span class="views">'+(e[2]?"פרק "+e[2]+" · ":"סרט מיוחד · ")+e[3]+' צפיות</span></div></div>';
    return a;
  }
  document.addEventListener("click",function(ev){
    var b=ev.target.closest(".thumb");
    if(b){var f=document.createElement("iframe");
      f.src="https://www.youtube-nocookie.com/embed/"+b.getAttribute("data-id")+"?autoplay=1&rel=0";
      f.allow="autoplay; encrypted-media; picture-in-picture; fullscreen";f.allowFullscreen=true;f.title="נגן וידאו";b.replaceWith(f)}
    var c=ev.target.closest("[data-copy]");
    if(c){var t=D.rss;(navigator.clipboard?navigator.clipboard.writeText(t):Promise.reject()).then(function(){c.textContent="הועתק"},function(){c.textContent="לא הצליח"});
      setTimeout(function(){c.textContent="העתקת RSS"},1800)}
  });
  var feat=$("#featured");
  if(feat){var e=D.episodes[0];
    feat.innerHTML='<button class="thumb" data-id="'+e[0]+'" aria-label="נגן את הפרק האחרון"><img alt="" src="'+th(e[0])+'">'+PLAY+'</button>';
    $("#feat-title").textContent=e[1];$("#feat-num").textContent="הפרק האחרון · פרק "+e[2];}
  var latest=$("#latest");if(latest)D.episodes.slice(1,7).forEach(function(e){latest.appendChild(card(e))});
  var all=$("#all");
  if(all){var q=$("#q"),count=$("#count");
    var render=function(){var v=(q.value||"").trim();all.innerHTML="";var n=0;
      D.episodes.forEach(function(e){if(v&&(e[1]+" "+(e[2]||"")).indexOf(v)<0)return;all.appendChild(card(e));n++});
      count.textContent=n+" פרקים";if(!n)all.innerHTML='<p class="empty">לא נמצא פרק כזה. נסו מילה אחרת.</p>'};
    q.addEventListener("input",render);render();}
  var hosts=$("#hosts");
  if(hosts)D.hosts.forEach(function(h,i){var d=document.createElement("div");d.className="host cut";
    d.innerHTML='<span class="n" aria-hidden="true">'+(i+1)+'</span><svg class="av" viewBox="0 0 92 92" aria-hidden="true"><defs><linearGradient id="g'+i+'" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#5C8DFF"/><stop offset="1" stop-color="#1B3BA8"/></linearGradient></defs><circle cx="46" cy="46" r="44" fill="url(#g'+i+')"/><path d="M6 60c20 14 60 14 80 0M8 70c22 14 54 14 76 0" stroke="#fff" stroke-opacity=".35" stroke-width="6" fill="none"/><text x="46" y="60" text-anchor="middle" font-family="Karantina,Heebo,sans-serif" font-size="52" font-weight="700" fill="#fff">'+h.initial+'</text></svg><h3>'+h.name+'</h3><p>'+h.role+'</p>';hosts.appendChild(d)});
  var posts=$("#posts");
  if(posts)D.posts.forEach(function(p){var a=document.createElement("article");a.className="post cut";
    a.innerHTML='<span class="tag">'+p.tag+'</span><h3>'+p.title+'</h3>'+p.body.map(function(t){return "<p>"+t+"</p>"}).join("")+
      (p.ep?'<a class="link" href="https://www.youtube.com/watch?v='+p.ep+'" target="_blank" rel="noopener">לצפייה בפרק</a>':"")+'<span class="sample">פוסט לדוגמה</span>';posts.appendChild(a)});
  var ticker=$("#ticker");
  if(ticker){var s=D.episodes.slice(0,12).map(function(e){return "<span>"+e[1]+"</span>"}).join("");ticker.innerHTML="<div class='tr'>"+s+s+"</div>"}
  document.querySelectorAll("[data-link]").forEach(function(a){a.href=D[a.getAttribute("data-link")]});
  document.querySelectorAll("[data-ic]").forEach(function(n){n.innerHTML=ic(n.getAttribute("data-ic"))+n.innerHTML});
  var st=$("#stat-eps");if(st)st.textContent=D.episodes[0][2];
  var fact=$("#fact");
  if(fact){var f=D.quiz[Math.floor(Date.now()/864e5)%D.quiz.length];fact.textContent=f.e}
  /* crowd silhouette */
  var cr=$("#crowd");
  if(cr){var W=1200,H=200,out='',seed=7;function r(){seed=(seed*9301+49297)%233280;return seed/233280}
    out+='<defs><radialGradient id="gl"><stop offset="0" stop-color="#9EC0FF" stop-opacity=".95"/><stop offset=".4" stop-color="#2F6BFF" stop-opacity=".5"/><stop offset="1" stop-color="#2F6BFF" stop-opacity="0"/></radialGradient><filter id="bl"><feGaussianBlur stdDeviation="9"/></filter><linearGradient id="fade" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0A1233"/><stop offset="1" stop-color="#040816"/></linearGradient></defs>';
    var fl=[160,430,720,980,1100];
    fl.forEach(function(x,i){out+='<circle class="glow" style="animation-delay:'+(i*.4)+'s" cx="'+x+'" cy="78" r="70" fill="url(#gl)"/><ellipse class="smoke" style="animation-delay:'+(i*.7)+'s" cx="'+x+'" cy="40" rx="60" ry="30" fill="#5C8DFF" opacity=".25" filter="url(#bl)"/>'});
    for(var row=0;row<5;row++){var y=110+row*18,col=['#0E1A4A','#0B1540','#09123A','#070E2C','#050A1E'][row];
      out+='<rect x="0" y="'+(y+8)+'" width="'+W+'" height="'+(H-y)+'" fill="'+col+'"/>';
      for(var x=(row%2)*9;x<W;x+=18+r()*6){var hh=y-6-r()*5;
        out+='<circle cx="'+x.toFixed(1)+'" cy="'+hh.toFixed(1)+'" r="7" fill="'+col+'"/><rect x="'+(x-8).toFixed(1)+'" y="'+(hh+5).toFixed(1)+'" width="16" height="22" rx="7" fill="'+col+'"/>';
        if(r()<.12){out+='<rect x="'+(x+5).toFixed(1)+'" y="'+(hh-22).toFixed(1)+'" width="3" height="26" fill="'+col+'"/>'}
        if(r()<.07){out+='<path d="M'+(x+7).toFixed(1)+' '+(hh-24).toFixed(1)+'h26v14h-26z" fill="#2F6BFF" opacity=".75"/>'}}}
    cr.setAttribute("viewBox","0 0 "+W+" "+H);cr.innerHTML=out+'<style>.glow{animation:fl 2.2s ease-in-out infinite alternate}.smoke{animation:sm 7s ease-in-out infinite alternate}@keyframes fl{from{opacity:.55}to{opacity:1}}@keyframes sm{from{transform:translateY(8px)}to{transform:translateY(-14px)}}</style>'}
})();
