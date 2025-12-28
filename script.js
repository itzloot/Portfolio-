const sections = document.querySelectorAll(".section, .hero");
const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.style.opacity=1;
      e.target.style.transform="translateY(0)";
    }
  });
});
sections.forEach(sec=>{
  sec.style.opacity=0;
  sec.style.transform="translateY(30px)";
  sec.style.transition="all 0.6s ease";
  observer.observe(sec);
});