//obtener la referencia de los elementos con arreglos asociativos
//se utiliza el atributo "name" de cada elemento
const formulario = document.forms["frmRegistro"]
const button = formulario.elements["btnRegistro"]

//crear modal con bootstrap
const modal = new bootstrap.Modal(document.getElementById("idModal"))

//obtener la referencia del cuerpo del modal para imprimir resultado
const bodyModal = document.getElementById("idBodyModal")

const validarForm = () =>{
    let errores = []

    //valida campos vacios
    const nombre = formulario["idNombre"].value.trim()
    const apellidos = formulario["idApellidos"].value.trim()
    const fechaNac = formulario["idFechaNac"].value
    const correo = formulario["idCorreo"].value.trim()
    const contrasenia = formulario["idPassword"].value
    const contraseniaAgain = formulario["idPasswordAgain"].value
    const intereses = document.querySelectorAll('input[type="checkbox"]:checked')
    const carrera = formulario.querySelector('input[name="idRdCarrera"]:checked')
    const pais = formulario["idCmPais"].value

    if(!nombre || !apellidos) errores.push("Los campos de nombre y apellidos no deben estar vacios")
    if(!fechaNac || new Date(fechaNac) > new Date()) errores.push("La fecha de nacimiento no puede superar la actual")
    
    //valida correo electronico
    const emailFormato = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    if(!emailFormato.test(correo)) errores.push("El correo electronico tiene un formato invalido")
    
    //valida contrasenias
    if(contrasenia !== contraseniaAgain) errores.push("Las contraseñas no coinciden")

    //valida si esta seleccionado un interes
    if(intereses.length === 0) errores.push("Seleccione al menos un interes")

    //valida si se selecciono una carrera
    if(!carrera) errores.push("Seleccione una carrera")

    //valida si se selecciono un pais
    if(!pais || pais === "Selecciona una opcion") errores.push("Seleccione un pais")

    if(errores.length > 0){
        let listaErrores = "<ul>"
        errores.forEach(error => {
            listaErrores += `<li>${error}</li>`
        })
        listaErrores += "</ul>"
        bodyModal.innerHTML = listaErrores
        modal.show()
        return false
    }
    mostrarDatos()
    return true
}

const mostrarDatos = () => {
    let data = [
        {label: "Nombre", value: formulario["idNombre"].value},
        {label: "Apellidos", value: formulario["idApellidos"].value},
        {label: "Fecha de Nacimiento", value: formulario["idFechaNac"].value},
        {label: "Correo", value: formulario["idCorreo"].value},
        {label: "Carrera", value: formulario.querySelector('input[name="idRdCarrera"]:checked').nextElementSibling.textContent},
        {label: "Pais de Origen", value: formulario["idCmPais"].options[formulario["idCmPais"].selectedIndex].text},
    ]
    let tabla = "<table class='table'>"
    tabla += "<thead><tr><th>Campo</th><th>Valor</th></tr></thead><tbody>"
    data.forEach(dato => {
        tabla += `<tr><td>${dato.label}</td><td>${dato.value}</td></tr>`
    })
    tabla += "</tbody></table>"

    bodyModal.innerHTML = tabla
    modal.show
}

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
            totText++
        } else if(tipoElemento == "password" && tipoNode == "INPUT"){
            //contar total de "input type = password"
            totPass++
        } else if(tipoElemento == "radio" && tipoNode == "INPUT"){
            totRadio++
        } else if(tipoElemento == "checkbox" && tipoNode == "INPUT"){
            totCheck++
        } else if(tipoElemento == "date" && tipoNode == "INPUT"){
            totDate++
        } else if(tipoNode == "SELECT"){
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
button.addEventListener("click", () => {
    recorrerFormulario()
})
button.addEventListener ("click", () => {
    if(validarForm()){
        formulario.reset()
    }
})