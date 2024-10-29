//otra forma de acceder a un elemento HTML es por medio "getElementById" del DOM
//notar que no se antepone el caracter #
const campo = document.getElementById("idTxtNumero")

//definit una funcion anonimo que permite validar en tiempo real el ingreso de un numero
const validarNumero = function(e){
    //crear una expresion regular que valida que sean numeros
    let validar = /^[0-9]{1}$/
    let tecla = e.key

    /*valida que la expresion coincida con el registrado observara que
    al intentar teclara un letra u otro caracter diferente a un numero
    este no se escribe en el campo*/
    
    if (!validar.test(tecla)) e.preventDefault();
}

//definir el evento keypress
campo.addEventListener("keypress", validarNumero)

//trabajar con el boton Calcular
const boton = document.getElementById("idBtnCalcular")

//definir una funcion anonimo para calcular el factorial de un numero
function calcularFactorial(numero){
    return numero < 1 ? 1 : numero * calcularFactorial(numero - 1)
}

//definir una funcion de tipo fecha para imprimir el resultado del factorial
const imprimir = (numero, resultado) => {
    const contenedor = document.getElementById("idDivResultado")
    contenedor.innerHTML = `El factorial de ${numero}! es ${resultado}`
}

//definir una funcion tradicional
function calcular(){
    let numero = document.getElementById("idTxtNumero").value
    if (numero != ""){
        //llamar la funcion anonima para calcular el factorial
        let resultado = calcularFactorial(numero)
        //enviar el resultado a funcion de tipo flecha
        imprimir(numero, resultado)
    } else {
        alert("Debe ingresar un número válido")
    }
}
//definir el evento click para el boton
boton.addEventListener("click", calcular)