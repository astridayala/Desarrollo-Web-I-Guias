//referencia de los botones
const buttonSpan = document.getElementById("idBtnSpan");
const buttonP = document.getElementById("idBtnP");
const buttonDiv = document.getElementById("idBtnDiv");
const buttonButton = document.getElementById("idBtnButton");
const imprimir = document.getElementById("idImprimirResultado");

//contar elementos dentro del HTML
const contarElementos = function(elemento){
    //obtener todas las etiquetas span
    let arrayElement = document.getElementsByTagName(elemento);
    console.log(
        `Etiquetas buscadas <${elemento}><${elemento}> / Total encontradas: ${arrayElement.length}`
    );
    for (const i of arrayElement){
        console.log(i);
    }
    alert("Revise la consola del navegador");
};
//eventos para los botones
buttonSpan.onclick = () => {
    contarElementos("span");
};
buttonP.onclick = () => {
    contarElementos("p");
};
buttonDiv.onclick = () => {
    contarElementos("div");
};
buttonButton.onclick = () => {
    contarElementos("button");
}