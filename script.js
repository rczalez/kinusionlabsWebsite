// Kinusion Labs - static version of prototype
function setLang(lang){
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-es]').forEach(el=>{
    const v = el.getAttribute(lang==='es' ? 'data-es' : 'data-en');
    if(v) el.textContent = v;
  });
  // placeholders
  document.querySelectorAll('[data-es-ph]').forEach(el=>{
    el.placeholder = el.getAttribute(lang==='es' ? 'data-es-ph' : 'data-en-ph') || el.placeholder;
  });
  document.querySelectorAll('[data-lang]').forEach(b=>{
    b.classList.toggle('active', b.getAttribute('data-lang')===lang);
  });
  // footer lang note - keep simple
}
document.querySelectorAll('[data-lang]').forEach(b=>{
  b.addEventListener('click', ()=> setLang(b.getAttribute('data-lang')));
});
// smooth scroll
document.querySelectorAll('[data-scroll]').forEach(btn=>{
  btn.addEventListener('click', (e)=>{
    e.preventDefault();
    const id = btn.getAttribute('data-scroll');
    const el = document.getElementById(id);
    if(el) el.scrollIntoView({behavior:'smooth'});
    document.getElementById('mobile-nav')?.classList.remove('open');
    document.getElementById('menu-btn').textContent = '☰';
  });
});
// mobile menu
const menuBtn = document.getElementById('menu-btn');
const mobileNav = document.getElementById('mobile-nav');
if(menuBtn && mobileNav){
  menuBtn.addEventListener('click', ()=>{
    const open = mobileNav.classList.toggle('open');
    menuBtn.textContent = open ? '✕' : '☰';
  });
}
// filters
const filterBtns = document.querySelectorAll('.filters button');
const projects = document.querySelectorAll('.project');
const countEl = document.getElementById('results-count');
const noResults = document.getElementById('no-results');
filterBtns.forEach(btn=>{
  btn.addEventListener('click', ()=>{
    filterBtns.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.getAttribute('data-filter');
    let shown = 0;
    projects.forEach(p=>{
      const show = f==='all' || p.getAttribute('data-cat')===f;
      p.classList.toggle('hidden', !show);
      if(show) shown++;
    });
    if(countEl) countEl.textContent = shown;
    if(noResults) noResults.classList.toggle('hidden', shown!==0);
  });
});
// tutorials expand
document.querySelectorAll('.tuto-toggle').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const id = btn.getAttribute('data-target');
    const el = document.getElementById(id);
    if(el) el.classList.toggle('hidden');
  });
});
// show CTA on desktop
if(window.innerWidth>=640){
  const cta = document.getElementById('cta-desktop');
  if(cta) cta.style.display='inline-flex';
}
