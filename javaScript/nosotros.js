
function CardsLoader() {
    // Creamos el objeto card 
    const card_info = [{
      Picture_link : "./IMGS/personal1.png",
      Trainer_name : "Marcos Pereira",
      Trainer_description :`    Con más de 8 años transformando vidas a través del fitness, Alex
                combina su título en Ciencias del Deporte con certificaciones en TRX
                y nutrición deportiva. Especializado en entrenamientos de alta
                intensidad y rehabilitación, ha ayudado a más de 200 clientes a
                alcanzar sus metas, desde pérdida de peso hasta preparación para
                maratones. Su lema: 'El verdadero éxito se mide en hábitos, no solo
                en números'.`,
      WhatsApp_link :"https://wa.me/60302976",
      },
      {
        Picture_link : "IMGS/personal2.png",
        Trainer_name : "Elena Lopez",
        Trainer_description :`   Elena fusiona el entrenamiento tradicional con técnicas innovadoras de biomecánica y mindfulness. Como ex-atleta olímpica y especialista en entrenamiento funcional, diseña programas personalizados que no solo fortalecen el cuerpo, sino que también mejoran la postura y reducen el estrés. Su enfoque holístico ha revolucionado la forma en que sus clientes entienden el bienestar.`,
        WhatsApp_link :"https://wa.me/60302976",
        },
        {
          Picture_link : "IMGS/personal3.png",
          Trainer_name : "Daniel Motoa",
          Trainer_description :`  Daniel, experto en transformación corporal y coach motivacional, se especializa en ayudar a principiantes a superar sus miedos en el gimnasio. Su método único combina ejercicios adaptados a cada nivel con técnicas de programación neurolingüística para derribar barreras mentales. Conocido por convertir a los escépticos del fitness en entusiastas del ejercicio, su tasa de retención de clientes supera el 90%.`,
          WhatsApp_link :"https://wa.me/60302976",
          }
        ,
        {
          Picture_link : "IMGS/personal4.png",
          Trainer_name : "Daniela Riveros",
          Trainer_description :`  Daniela Riveros, conocida como 'Coach Dani', es una guerrera del fitness con experiencia en CrossFit y calistenia. Ex-bailarina profesional, aporta una perspectiva única sobre el control corporal y la agilidad. Su especialidad es crear rutinas que desafían los límites, combinando movimientos de gimnasia, danza y entrenamiento funcional. Su comunidad de +500 alumnos la reconoce por su habilidad para hacer que cada persona descubra su atleta interior, sin importar su punto de partida. 'El único límite real está en tu mente, y estoy aquí para ayudarte a superarlo.`,
          WhatsApp_link :"https://wa.me/60302976",
          }
      ];
     // Cargamos el card dentro del contenedor
     
     card_info.map(item=>{
      let container = document.querySelector(".team-container").insertAdjacentHTML("beforeend",tmplCard(item));
    })
    
    // creamos el tmplate del card 
    function tmplCard(item) {
      return `
          <section class="card-event">
        <article class="card-container">
          <article class="card card-fron">
            <img src="${item.Picture_link}" alt="" />
            <div class="card-footer-fron">
              <button>Click me</button>
            </div>
          </article>
          <article class="card card-back">
            <h1>${item.Trainer_name}</h1>
            <h5>
             ${item.Trainer_description}
            </h5>
            <div class="card-footer">
              <a href="${item. WhatsApp_link}" target="_blank"
                ><img src="./IMGS/whatsapp.png" alt="" />Contactame</a
              >
            </div>
          </article>
        </article>
      </section>
      
      `
      
    }
    
    }CardsLoader();
  
    // Inicio interaccion con las card flip
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