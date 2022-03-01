const somTeclas = document.querySelectorAll('.tecla_som');


function tocaSom(indice) {
    somTeclas[indice].play(); 
}


function tocaTecla (id){
    const elemento =document.querySelector(id)


    if (elemento === null){
        console.log('Elemento não encontrado');

    }

    else if (elemento.localName === 'audio' || elemento != null){

        elemento.play();
    }

}



const listaTeclas = document.querySelectorAll('.tecla');

//Usei tanto as teclas quanto os audios em estilo de lista(array) e usei os indice delas para tocar som, vinculada a tecla.

for (let i = 0; i < listaTeclas.length; i++) {
    
    const instrumento = listaTeclas[i].classList[1];
    const idDaTecla = `#som_${instrumento}`;



    listaTeclas[i].onclick = function() {

        tocaTecla(idDaTecla);
    } 


    listaTeclas[i].onkeydown = function (evento) {

        if(evento.code == "Space" || evento.code == "Enter"){
            
            listaTeclas[i].classList.add('ativa')
        }
    }
    listaTeclas[i].onkeyup = function () {
        listaTeclas[i].classList.remove('ativa')
    }
    
}
