// Creamos el json para filtrarlos por catagorias
const exercises = [
    {
      categoria: "Biceps",
      titulo: "Rutina 1",
      iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/z7YXe6znsJo?si=06uWaSLFbHF8ECEN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
      categoria: "Biceps",
      titulo: "Rutina 2",
      iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/OMgtUvMKXZw?si=GIYYQu6qKZM0rMe2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
      categoria: "Triceps",
      titulo: "Rutina 1",
      iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/62gZo7rji7o?si=B74ERNHwmoVp45U4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
      categoria: "Triceps",
      titulo: "Rutina 2",
      iframe: '<<iframe width="560" height="315" src="https://www.youtube.com/embed/rPXSJHtARtQ?si=Ejvav1a9J66dKleo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
      categoria: "Pecho",
      titulo: "Rutina 1",
      iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VB09kLgJDo0?si=mR2yN3xFFwZcSlkI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
      categoria: "Pecho",
      titulo: "Rutina 2",
      iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/LmIzypxrO20?si=viH7bJMaKPsfC-Og" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
      categoria: "Espalda",
      titulo: "Rutina 1",
      iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/fyctbKQgClY?si=OtC911uETUq9c6sX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
      categoria: "Espalda",
      titulo: "Rutina 2",
      iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/lYOB0It7gT0?si=tIwF1Ji_CKgTX9OJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
      categoria: "Piernas",
      titulo: "Rutina 1",
      iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/eLIiNz2ex6U?si=vW-RwZZthE66ROYx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
      categoria: "Piernas",
      titulo: "Rutina 2",
      iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/RGO6rNdbU1w?si=8HRPSgE2GDZa_jDv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    }
  ];
  
 
document.addEventListener("DOMContentLoaded",()=>{
  

let categorias = creando_categorias()
  insertar_datos(categorias)
  eventCategoria()
  mostrarVideo()
});



function creando_categorias() {
  // creando categorias
const categorias = []

exercises.map((item)=>{
  if (categorias.includes(item.categoria) ==false){
    categorias.push(item.categoria)
  }
})
return categorias
}

// insertar los datos de las categorias y sus subtitulos
function insertar_datos(categorias) {
  categorias.forEach(itemRef => {
    let itemsCategoria = exercises.filter(exercice=> exercice.categoria ===itemRef)
    let container = document.querySelector(".ejercicios");
    // insertamos el titulo de cada categoria
    container.insertAdjacentHTML("beforeend",` <h1 class="tittle-exercice" >${itemRef}</h1>`)
    // insertamos el contenedor para los subtitulos
    let tittle_container = document.createElement("article");
    tittle_container.setAttribute("class","tittle-container")
    // vamos a insertar cada elemento de items categoria
    itemsCategoria.forEach(item=>{
      tittle_container.insertAdjacentHTML("beforeend",`<div class = "subTittle-exercice">${item.titulo}</div>`)
    })
//  Insertamos el contenedor creado a la categoria
    container.insertAdjacentElement("beforeend",tittle_container)

    
  });
}

// creando el evente handler
function eventCategoria() {
  const tittles =  document.querySelectorAll(".tittle-exercice");
  tittles.forEach((item)=>{
    item.addEventListener("click",()=>{
      item.nextElementSibling.classList.toggle("container-active")
      
    })
  })
  
}
function mostrarVideo() {

// creando evento para buscar la categoria
const tittles =  document.querySelectorAll(".subTittle-exercice");
tittles.forEach((item)=>{
  item.addEventListener("click",()=>{
    const categoria = item.parentElement.previousSibling,
    categoriaFiltrada = exercises.filter(exercice=>exercice.categoria===categoria.textContent),
    itemFiltrado = categoriaFiltrada.filter(itemfilter=>itemfilter.titulo===item.textContent);
    console.log(itemFiltrado);

    const video_container = document.querySelector(".video-container");
  
    // limpiamos el contenedor
    video_container.innerHTML = ""
    // insertamos el video
    video_container.insertAdjacentHTML("beforeend",`${itemFiltrado[0].iframe}`)
    
    
    
    
    
    
  })
})
}


