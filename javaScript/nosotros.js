const cards = document.querySelectorAll(".card-event");

cards.forEach(card=>{
    let card_container = card.querySelector(".card-container")
    card.addEventListener("click",()=>{
        card_container.classList.add("card-active")    
    })
    card.addEventListener("mouseleave",()=>{
        card_container.classList.remove("card-active")  
    })
 
})
