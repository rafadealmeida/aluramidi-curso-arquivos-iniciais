const somTeclas = document.querySelectorAll('.tecla_som');


function tocaSom(indice) {
    somTeclas[indice].play(); 


}


const listaTeclas = document.querySelectorAll('.tecla');

var indice = 0;

listaTeclas[0].onclick = somTeclas[0].tocaSom;


for (let i = 0; i < somTeclas.length; i++) {
    const element = somTeclas[i];
    
}