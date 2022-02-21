const somTeclas = document.querySelectorAll('.tecla_som');


function tocaSom(indice) {
    somTeclas[indice].play(); 
}


function tocaTecla (id){
    document.querySelector(id).play();

}



const listaTeclas = document.querySelectorAll('.tecla');

//Usei tanto as teclas quanto os audios em estilo de lista(array) e usei os indice delas para tocar som, vinculada a tecla.

for (let i = 0; i < listaTeclas.length; i++) {
    
    const instrumento = listaTeclas[i].classList[1];
    const idDaTecla = `#som_${instrumento}`;



    listaTeclas[i].onclick = function() {

        tocaTecla(idDaTecla);
    } 

}
