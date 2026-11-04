/* Injects TVV side bars (desktop/tablet) and a top strip (phones). Content of the page is untouched. */
(function(){
 function tile(cls){return '<picture><source type="image/svg+xml" srcset="assets/techvest-arrow-tile.svg"><img class="'+cls+'" src="assets/techvest-arrow-tile-468.png" alt="TechVest" width="117" height="92"></picture>';}
 var home='https://atlantean2.github.io/tvv-site-preview/';
 function go(){
  if(document.querySelector('.tvv-bar'))return;
  var b=document.body;
  var l=document.createElement('aside');l.className='tvv-bar l';l.setAttribute('aria-label','TechVestVentures');
  l.innerHTML='<a href="'+home+'">'+tile('tile')+'<span class="nm">TechVestVentures</span></a><img class="art" src="assets/concept-1-building-blocks-cosmos-square-540.webp" alt="Building Blocks Cosmos art" width="540" height="540">';
  var r=document.createElement('aside');r.className='tvv-bar r';r.setAttribute('aria-hidden','true');
  r.innerHTML='<a href="'+home+'" tabindex="-1">'+tile('tile')+'<span class="nm">TechVestVentures</span></a>';
  var s=document.createElement('a');s.className='tvv-strip';s.href=home;s.innerHTML=tile('')+'<span class="nm">TechVestVentures</span>';
  b.insertBefore(s,b.firstChild);b.appendChild(l);b.appendChild(r);b.classList.add('tvv-has-bars');
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',go);else go();
})();
