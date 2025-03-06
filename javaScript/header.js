



    // Menu hamburger
    let container = document.querySelector(".menu-hamburger");
container.addEventListener("click",()=>{
  container.classList.toggle("hamburger-active");
  // desplegamos el header
  menu_principal = document.querySelector("header");
const btns = menu_principal.querySelectorAll("a");
menu_principal.classList.toggle("menu-active");
btns.forEach(btn=>{
  btn.addEventListener("click",()=>{
      menu_principal.classList.remove("menu-active");
   
  })
  
  
  })

})
// Verificar si el la pantalla cambia y activa el menu hamburguesa
window.addEventListener("resize",()=>{
  let container = document.querySelector(".menu-hamburger");
  if(window.innerWidth=680 && container.classList.contains("menu-hamburger")){
   
      container.classList.remove("hamburger-active");
  }
  
})



