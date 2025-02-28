window.addEventListener("scroll",()=>{
    let slides = document.querySelectorAll(".slide")
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY
    let scrollFraction = scrollPosition/maxScroll
slides.forEach(slide=>{
    if (scrollFraction>=0.21){
        slide.classList.add("slide-active")
       }else{
        slide.classList.remove("slide-active")
       }
})
  
    
    
})
