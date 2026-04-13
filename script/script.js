/*funcion para sonido al hacer click inicio*/
const inicio = document.getElementById("inicio1");
const audio = document.getElementById("audioInicio");

function reproducirAudio(){
    audio.currentTime = 0;
audio.play();
}
inicio.addEventListener("click", reproducirAudio);
// funcion para ocultar secciones, solo muestra la que se cargue
function mostrarSection(id){

    document.querySelectorAll("main section").forEach(function(sec){
        sec.style.display = "none";
    });

    document.getElementById(id).style.display = "block";
}
// Esta funcion hace que la seccion inicio, sea la default
window.onload = function(){
    let actual = window.location.hash;
    if(actual != ""){
        mostrarSection(actual.substring(1));
        
    }else{
        mostrarSection("Inicio");
        console.log("JS cargado");
    }
}

