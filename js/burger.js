
(function(){
  document.addEventListener('DOMContentLoaded', ()=>{
    const btn = document.querySelector('[data-role="hamburger"]');
    const sidebar = document.querySelector('[data-role="sidebar"]');
    const scrim = document.querySelector('[data-role="scrim"]');
    if (!btn || !sidebar || !scrim) return;
    const open = ()=>{ sidebar.classList.add('open'); scrim.classList.add('show'); };
    btn.addEventListener('click', open);
  });
})();
