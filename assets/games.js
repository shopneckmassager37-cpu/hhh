(function(){
  var D=window.CURVA,$=function(s,r){return (r||document).querySelector(s)};
  function sv(id,c){return '<svg class="'+(c||"")+'" aria-hidden="true" viewBox="0 0 64 64" fill="none"><use href="#'+id+'"/></svg>'}
  function store(k,v){try{if(v===undefined)return localStorage.getItem(k);localStorage.setItem(k,v)}catch(e){return null}}
  function shuffle(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)),t=a[i];a[i]=a[j];a[j]=t}return a}
  /* tabs */
  var tabs=document.querySelectorAll(".tab"),panels=document.querySelectorAll(".panel");
  function show(id){tabs.forEach(function(t){t.setAttribute("aria-selected",t.dataset.p===id)});panels.forEach(function(p){p.hidden=p.id!==id})}
  tabs.forEach(function(t){t.addEventListener("click",function(){show(t.dataset.p);try{history.replaceState(null,"","#"+t.dataset.p)}catch(e){}})});
  var h=location.hash.slice(1);show(["quiz","tifo","bingo","memory"].indexOf(h)>=0?h:"quiz");

  /* quiz */
  (function(){var box=$("#quiz-box"),i=0,score=0,qs=[];
    function start(){qs=shuffle(D.quiz);i=0;score=0;ask()}
    function ask(){var q=qs[i];
      var order=shuffle(q.o.map(function(t,k){return {t:t,ok:k===q.a}}));
      box.innerHTML='<div class="gtop"><span class="pill">שאלה '+(i+1)+' מתוך '+qs.length+'</span><span class="pill">ניקוד '+score+'</span></div><div class="prog"><i style="width:'+(i/qs.length*100)+'%"></i></div><p class="qtext"></p><div class="opts"></div><p class="explain" aria-live="polite"></p><div class="nextrow"></div>';
      $(".qtext",box).textContent=q.q;
      order.forEach(function(o){var b=document.createElement("button");b.className="opt";b.textContent=o.t;
        b.onclick=function(){box.querySelectorAll(".opt").forEach(function(x,k){x.disabled=true;if(order[k].ok)x.classList.add("ok")});
          if(o.ok)score++;else b.classList.add("no");
          $(".explain",box).textContent=(o.ok?"נכון. ":"לא בדיוק. ")+q.e;
          var n=document.createElement("button");n.className="btn";n.textContent=i+1<qs.length?"לשאלה הבאה":"לתוצאה";n.onclick=function(){i++;i<qs.length?ask():end()};$(".nextrow",box).appendChild(n);n.focus()};
        $(".opts",box).appendChild(b)})}
    function end(){var best=+store("curva-quiz")||0;if(score>best){best=score;store("curva-quiz",best)}
      var t=score>=9?"אתם חלק מהקורבה":score>=6?"יציע מכובד":score>=3?"עוד קצת אימונים":"בואו להאזין לעוד פרק";
      box.innerHTML='<div class="result"><span class="eyebrow">התוצאה שלכם</span><b>'+score+'/'+qs.length+'</b><h3>'+t+'</h3><p style="color:var(--muted);margin-bottom:22px">השיא שלכם: '+best+'</p><button class="btn" id="again">שוב</button></div>';$("#again").onclick=start;$("#again").focus()}
    start()})();

  /* tifo */
  (function(){var cv=$("#tifo-c"),ctx=cv.getContext("2d"),C=24,R=16,S=30;cv.width=C*S;cv.height=R*S;
    var cols=["#FFFFFF","#D6E4FF","#5C8DFF","#2F6BFF","#0E1A4A","#040816"],cur=3,g=[],draw=false,mir=false;
    function clear(){g=[];for(var y=0;y<R;y++){g.push([]);for(var x=0;x<C;x++)g[y].push(0)}}
    function paint(){for(var y=0;y<R;y++)for(var x=0;x<C;x++){ctx.fillStyle=cols[g[y][x]];ctx.fillRect(x*S,y*S,S,S)}
      ctx.strokeStyle="rgba(4,8,22,.12)";ctx.lineWidth=1;ctx.beginPath();for(var x=0;x<=C;x++){ctx.moveTo(x*S+.5,0);ctx.lineTo(x*S+.5,R*S)}for(var y=0;y<=R;y++){ctx.moveTo(0,y*S+.5);ctx.lineTo(C*S,y*S+.5)}ctx.stroke()}
    function demo(){clear();for(var y=0;y<R;y++)for(var x=0;x<C;x++){var d=Math.abs(x-11.5)+Math.abs(y-7.5);g[y][x]=d<4?0:d<7?2:d<10?3:(y%4<2?4:3)}paint()}
    function cell(e){var r=cv.getBoundingClientRect();return [Math.floor((e.clientX-r.left)/r.width*C),Math.floor((e.clientY-r.top)/r.height*R)]}
    function put(e){var p=cell(e),x=p[0],y=p[1];if(x<0||y<0||x>=C||y>=R)return;g[y][x]=cur;if(mir)g[y][C-1-x]=cur;paint()}
    cv.addEventListener("pointerdown",function(e){draw=true;cv.setPointerCapture(e.pointerId);put(e)});
    cv.addEventListener("pointermove",function(e){if(draw)put(e)});
    cv.addEventListener("pointerup",function(){draw=false});
    var sw=$("#swatches");cols.forEach(function(c,k){var b=document.createElement("button");b.className="sw";b.style.background=c;b.setAttribute("aria-label","צבע "+(k+1));b.setAttribute("aria-pressed",k===cur);
      b.onclick=function(){cur=k;sw.querySelectorAll(".sw").forEach(function(x,j){x.setAttribute("aria-pressed",j===k)})};sw.appendChild(b)});
    $("#mir").onchange=function(){mir=this.checked};
    $("#t-clear").onclick=function(){clear();paint()};$("#t-demo").onclick=demo;
    $("#t-save").onclick=function(){var o=document.createElement("canvas");o.width=C*40;o.height=R*40;var x=o.getContext("2d");
      for(var yy=0;yy<R;yy++)for(var xx=0;xx<C;xx++){x.fillStyle=cols[g[yy][xx]];x.fillRect(xx*40,yy*40,40,40)}
      o.toBlob(function(b){if(!b)return;var a=document.createElement("a");a.href=URL.createObjectURL(b);a.download="curva-tifo.png";document.body.appendChild(a);a.click();a.remove()})};
    demo()})();

  /* bingo */
  (function(){var el=$("#bingo"),msg=$("#bmsg"),cells=[];
    function build(){el.innerHTML="";cells=[];msg.textContent="";var items=shuffle(D.bingo).slice(0,24);
      for(var k=0;k<25;k++){var b=document.createElement("button");b.className="bc";
        if(k===12){b.textContent="הקורבה פוד";b.classList.add("free");b.setAttribute("aria-pressed","true")}
        else{b.textContent=items[k<12?k:k-1];b.setAttribute("aria-pressed","false");
          b.onclick=function(){this.setAttribute("aria-pressed",this.getAttribute("aria-pressed")!=="true");check()}}
        el.appendChild(b);cells.push(b)}}
    function on(i){return cells[i].getAttribute("aria-pressed")==="true"}
    function check(){var L=[];for(var i=0;i<5;i++){L.push([0,1,2,3,4].map(function(j){return i*5+j}));L.push([0,1,2,3,4].map(function(j){return j*5+i}))}
      L.push([0,6,12,18,24],[4,8,12,16,20]);var wins=L.filter(function(l){return l.every(on)});
      cells.forEach(function(c){c.classList.remove("win")});wins.forEach(function(l){l.forEach(function(i){cells[i].classList.add("win")})});
      msg.textContent=wins.length?"בינגו! "+(wins.length>1?wins.length+" שורות":""):""}
    $("#b-new").onclick=build;build()})();

  /* memory */
  (function(){var el=$("#mem"),info=$("#minfo"),msg=$("#mmsg"),icons=["i-scarf","i-flare","i-drum","i-flag","i-ball","i-whistle","i-trophy","i-boot"],first=null,lock=false,moves=0,found=0;
    function build(){el.innerHTML="";first=null;lock=false;moves=0;found=0;msg.textContent="";upd();
      shuffle(icons.concat(icons)).forEach(function(id){var b=document.createElement("button");b.className="mc";b.dataset.id=id;b.setAttribute("aria-label","קלף");
        b.innerHTML='<span class="in"><span class="f">'+sv("i-ball")+'</span><span class="b">'+sv(id)+'</span></span>';
        b.onclick=function(){if(lock||b.classList.contains("open")||b.classList.contains("done"))return;b.classList.add("open");
          if(!first){first=b;return}moves++;upd();
          if(first.dataset.id===id){first.classList.add("done");b.classList.add("done");first.classList.remove("open");b.classList.remove("open");first=null;found++;
            if(found===8){var best=+store("curva-mem")||99;if(moves<best){store("curva-mem",moves);best=moves}msg.textContent="סיימתם ב־"+moves+" מהלכים. השיא: "+best}}
          else{lock=true;var a=first;first=null;setTimeout(function(){a.classList.remove("open");b.classList.remove("open");lock=false},800)}};
        el.appendChild(b)})}
    function upd(){info.textContent="מהלכים: "+moves}
    $("#m-new").onclick=build;build()})();
})();
