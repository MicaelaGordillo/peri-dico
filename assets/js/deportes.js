/*Lista de productos disponibles*/ 
const noticias = [
    {
        src: "imagen2.jpg",
        alt: "imagen2",
        titulo: "Revelan las exigencias de Messi para renovar con el Barcelona en 2020, según El Mundo",
        descripcion: "En la publicación aseguran que Messi también pidió palcos en el Camp Nou, rebajar su clausula de salida de 700 millones de euros a 10 mil euros, entre otras cosas.",
    },
    {
        src: "imagen3.jpg",
        alt: "imagen3",
        titulo: "Con equipo completo, Bolivia cumplió su primer entrenamiento en Francia",
        descripcion: "La práctica se realizó en el estadio Lionel Charbonnier de Orleans. Este sábado enfrenta a la selección de Senegal.",
    },
    {
        src: "imagen4.jpg",
        alt: "imagen4",
        titulo: "Carlos Lampe llegó a Francia y La Verde está completa para enfrentar a Senegal",
        descripcion: "El arquero que pasa por un buen momento con Atlético Tucumán, club que es líder del fútbol argentino, se sumó este miércoles a la selección boliviana que jugará el sábado ante el campeón africano.",
    },
    {
        src: "imagen5.png",
        alt: "imagen5",
        titulo: "Cristiano Ronaldo quiere llegar al menos hasta la Eurocopa de 2024",
        descripcion: "“Mi recorrido aún no ha terminado. Vais a tener que soportar a ‘Cris’ todavía algún tiempo”, declaró el delantero portugués a sus 37 años.",
    },
    {
        src: "imagen6.jpg",
        alt: "imagen6",
        titulo: "Tras 24 horas de viaje la Verde llegó a Orleans, donde enfrentará a Senegal el fin de semana",
        descripcion: "Partieron desde Viru Viru el lunes por la noche, pasaron por Madrid y posteriormente a París, para culminar en la sede del partido.",
    },
    {
        src: "imagen7.jpg",
        alt: "imagen7",
        titulo: "Pablo Godoy se despidió de la ‘U’ de Vinto y está cerca de retornar a Always Ready",
        descripcion: "El paraguayo retornará a la institución alteña con la que estuvo ligado en distintos periodos de tiempo.",
    },
];
    
/*Mostrar el catalogo de productos*/
function renderizarNoticias(noticias) {
let html = "";
var aux = 0;

for (var i = 0; i < noticias.length; i++) {
    if(i%3==0) {
        html+=`<div class="card-deck">`;
        aux = i + 2;
    }
    html += `
    <div class="card">
        <img class="card-img-top" src="../assets/images/deportes/${noticias[i].src}" alt="${noticias[i].alt}">
        <div class="card-body">
            <h5 class="card-title">${noticias[i].titulo}</h5>
            <p class="card-text">${noticias[i].descripcion}</p>
        </div>
    </div>
    `;
    if(aux == i){
        html+=`</div>`;
    }
}

$("#noticias").html(html);
}
/*Inicializar las funciones cuando la pantalla se inicie*/
$(document).ready(function(){
    renderizarNoticias(noticias);
})