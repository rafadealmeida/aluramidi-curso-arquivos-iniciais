const somTeclas = document.querySelectorAll('.tecla_som');


function tocaSom(indice) {
    somTeclas[indice].play(); 
}


const listaTeclas = document.querySelectorAll('.tecla');

//Usei tanto as teclas quanto os audios em estilo de lista(array) e usei os indice delas para tocar som, vinculada a tecla.

for (let i = 0; i < somTeclas.length; i++) {
    
    listaTeclas[i].onclick = function() {

        tocaSom(i);
    } 

}