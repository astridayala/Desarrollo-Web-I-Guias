//obtener la referencia de los elementos con arreglos asociativos
//se utiliza el atributo "name" de cada elemento
const formulario = document.forms["frmRegistro"]
const button = document.forms["frmRegistro"].elements["btnRegistro"]

//crear modal con bootstrap
const modal = new bootstrap.Modal(document.getElementById("idModal"))

//obtener la referencia del cuerpo del modal para imprimir resultado
const bodyModal = document.getElementById("idBodyModal")

//recorrer el formulario
const recorrerFormulario = function(){
    let totText = 0
    let totRadio = 0
    let totCheck = 0
    let totDate = 0
    let totSelect = 0
    let totFile = 0
    let totPass = 0
    let totEmail = 0

    //recorrer elementos del formulario
    let elementos = formulario.elements
    let totalElementos = elementos.length

    for (let index = 0; index < totalElementos; index++){
        //acceder a cada hijo del formulario
        let elemento = elementos[index]

        //verificar el tipo de control en el formulario
        let tipoElemento = elemento.type
        //verificar el tipo de nodo
        let tipoNode = elemento.nodeName

        //contar el total de "input type = text"
        if (tipoElemento == "text" && tipoNode == "INPUT"){
            console.log(elemento)
            totText++
        } else if(tipoElemento == "password" && tipoNode == "INPUT"){
            //contar total de "input type = password"
            console.log(elemento)
            totEmail
        } else if(tipoElemento == "radio" && tipoNode == "INPUT"){
            console.log(elemento)
            totRadio++
        } else if(tipoElemento == "checkbox" && tipoNode == "INPUT"){
            console.log(elemento)
            totCheck++
        } else if(tipoElemento == "date" && tipoNode == "INPUT"){
            console.log(elemento)
            totDate++
        } else if(tipoNode == "SELECT"){
            console.log(elemento)
            totSelect++
        }
    }
    let resultado = `
        Total de input [type="text"] = ${totText}<br>
        Total de input [type="password"] = ${totPass}<br>
        Total de input [type="radio"] = ${totRadio}<br>
        Total de input [type="checkbox"] = ${totCheck}<br>
        Total de input [type="date"] = ${totDate}<br>
        Total de input [type="email"] = ${totEmail}<br>
        Total de select = ${totSelect}<br>
    `;
    bodyModal.innerHTML = resultado
    //funcion que permite mostrar modal de Bootstrap
    //la funcion es definida por Bootstrap
    modal.show()
}
//agregar eventos al boton
button.onclick = () => {
    recorrerFormulario()
}