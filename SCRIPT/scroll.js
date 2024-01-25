
// Animation For Skill Section For each Skills
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


// Animation For ALL Sections
const supreme_observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    console.log(entry);
    if (entry.isIntersecting){
      entry.target.classList.add('section-animation');
    } else {
      entry.target.classList.remove('section-animation');
    }
  });
})

const SectionElements = document.querySelectorAll('.section-content-container');
SectionElements .forEach((e1)=> supreme_observer.observe(e1));



// Animation For Project Section For each Projects
function ProjectAnimation(){
  
const each_project_observe_left = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    console.log(entry);
    if (entry.isIntersecting){
      entry.target.classList.add('animate-left-project');
    } else {
      entry.target.classList.remove('animate-left-project');
    }

  });
})

const hiddenProjectLeft = document.querySelectorAll('.left-project');

hiddenProjectLeft.forEach((e1)=>each_project_observe_left.observe(e1));


const each_project_observe_right = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    console.log(entry);
    if (entry.isIntersecting){
      entry.target.classList.add('animate-right-project');
    } else {
      entry.target.classList.remove('animate-right-project');
    }
  });
})

const hiddenProjectRight = document.querySelectorAll('.right-project');

hiddenProjectRight.forEach((e1)=>each_project_observe_right.observe(e1));

}

// Calling the scroll animation
ProjectAnimation();



// For Scroll Up Button
const Home_observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    console.log(entry);
    if (entry.isIntersecting){
      document.querySelector('.Scroll-up-button').classList.add('hidden-element');
    } else {
      document.querySelector('.Scroll-up-button').classList.remove('hidden-element');
      // entry.target.classList.remove('skill-bar-animate');
    }
  });
})

const Home_section = document.querySelectorAll('.home-section');
Home_section.forEach((e1)=>Home_observer.observe(e1));
