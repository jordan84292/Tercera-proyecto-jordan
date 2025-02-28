const menu_container = document.querySelector(".menu-hamburger"),
menu_colapse = menu_container.querySelector(".hamburger-colapse"),
menu_principal = document.querySelector("header");
const btns = menu_principal.querySelectorAll("a");

menu_container.addEventListener("click",()=>{
    menu_colapse.classList.toggle("menu-active");
    menu_principal.classList.toggle("menu-active");

})

btns.forEach(btn=>{
    btn.addEventListener("click",()=>{
        menu_colapse.classList.toggle("menu-active");
        menu_principal.classList.toggle("menu-active");
    })
    
    
    })
