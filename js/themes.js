
(function(){
  const KEY='ruza.theme';
  function apply(theme){
    const html=document.documentElement;
    html.classList.remove('theme-neon','theme-gradient','theme-black');
    html.classList.add('theme-'+theme);
    localStorage.setItem(KEY,theme);
  }
  document.addEventListener('DOMContentLoaded', ()=>{
    apply(localStorage.getItem(KEY)||'neon');
    document.querySelectorAll('input[name=theme]').forEach(r=>{
      r.addEventListener('change', e=> apply(e.target.value));
    });
  });
})();
