const numeroAleatorio = Math.floor(Math.random() * 25)+1
const numeroIntentos = 3
let intentos = 1

function generarNumeroAleatorio(){
    let mensaje
    const parrafo = document.querySelector("#idParrafo")
    if (intentos <= numeroIntentos){
        let numero = prompt(
            "¿Qué número se ha generado (Intento " + intentos +")?"
        )
    }
}