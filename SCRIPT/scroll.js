const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    console.log(entry);
    if (entry.isIntersecting){
      entry.target.classList.add('skill-bar-animate');
    } else {
      entry.target.classList.remove('skill-bar-animate');
    }
  });
})

const hiddenElements = document.querySelectorAll('.skill-per');
hiddenElements.forEach((e1)=>observer.observe(e1));
