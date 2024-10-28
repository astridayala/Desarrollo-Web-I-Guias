//acceder a elementos HTML
const inputNombre = document.getElementById("idTxtNombre");
const inputApellido = document.getElementById("idTxtApellido");
const inputFechaNacimiento = document.getElementById("idTxtFechaNacimiento")
const inputRdMasculino = document.getElementById("idRdMasculino")
const inputRdFemenino = document.getElementById("idRdFemenino")
const cmbPais = document.getElementById("idCmbPais")
const inputDireccion = document.getElementById("idTxtDireccion")
const inputNombrePais = document.getElementById("idNombrePais")

const buttonAgregarPaciente = document.getElementById("idBtnAgregar")
const buttonLimpiarPaciente = document.getElementById("idBtnLimpiar")
const buttonMostrarPaciente = document.getElementById("idBtnMostrar")
const buttonAgregarPais = document.getElementById("idBtnAddPais")

const notificacion = document.getElementById("idNotificacion")
//componente de Bootstrap
const toast = new bootstrap.Toast(notificacion)
const mensaje = document.getElementById("idMensaje")

//componente modal
const idModal = document.getElementById("idModal")

//arreglo global de pacientes
let arrayPaciente = []

/*
crear una funcion para limpiar el formulario siempre que se cargue
la pagina o cuando se presione el boton "limpiar" del formulario
 */

const limpiarForm = () => {
    inputNombre.value = ""
    inputApellido.value = ""
    inputFechaNacimiento.value = ""
    inputRdMasculino.checked = false
    inputRdFemenino.checked = false
    cmbPais.value = 0
    inputDireccion.value = ""
    inputNombrePais.value = ""
    inputNombre.focus()
}

//funcion para validar el ingreso del paciente
const addPaciente = function(){
    let nombre = inputNombre.value
    let apellido = inputApellido.value
    let fechaNacimiento = inputFechaNacimiento.value
    let sexo = 
        inputRdMasculino.checked == true
            ? "Hombre"
            : inputRdFemenino.checked == true
            ? "Mujer"
            : "";
    let pais = cmbPais.value
    let labelPais = cmbPais.options[cmbPais.selectedIndex].text;
    let direccion = inputDireccion.value

    if (
        nombre != "" &&
        apellido != "" &&
        fechaNacimiento != "" &&
        sexo != "" &&
        pais != "" &&
        direccion != ""
    ) {
        //agregar informacion al arreglo paciente
        arrayPaciente.push(
            new Array(nombre,apellido,fechaNacimiento,sexo,labelPais,direccion)
        );
        //asignar un mensaje a nuestra notificacion
        mensaje.innerHTML = "Se ha registrado un nuevo paciente"
        //llamar al componente de Bootstrap
        toast.show()

        //limpiar formulario
        limpiarForm()
    } else{
        //asignar un mensaje a nuestra notificacion
        mensaje.innerHTML = "Faltan campos por completar"
        //llamar al componente de Bootstrap
        toast.show()
    }
}

//funcion que imprime la ficha de los pacientes registrados
function imprimirFilas(){
    let $fila = ""
    let contador = 1

    arrayPaciente.forEach((element) => {
        $fila += `<tr>
                    <td scope="row" class="text-center fw-bold">${contador}</td>
                    <td>${element[0]}</td>
                    <td>${element[1]}</td>
                    <td>${element[2]}</td>
                    <td>${element[3]}</td>
                    <td>${element[4]}</td>
                    <td>${element[5]}</td>
                    <td>
                        <button id="idBtnEditar${contador}" type="button" class="btn btn-primary" alt="Eliminar">
                            <i class="bi bi-pencil-square"></i>
                        </button>
                        <button id="idBtnEliminar${contador}" type="button" class="btn btn-danger" alt="Editar">
                            <i class="bi bi-trash3-fill"></i>
                        </button>
                    </td>
                </tr>`
        contador++;
    })
    return $fila
}

const imprimirPacientes = () => {
    let $table = `<div class="table-responsive">
                    <table class="table table-striped table-hover table-bordered">
                        <tr>
                            <th scope="col" class="text-center" style="width:5%">#</th>
                            <th scope="col" class="text-center" style="width:15%">Nombre</th>
                            <th scope="col" class="text-center" style="width:15%">Apellido</th>
                            <th scope="col" class="text-center" style="width:10%">Fecha de nacimiento</th>
                            <th scope="col" class="text-center" style="width:10%">Sexo</th>
                            <th scope="col" class="text-center" style="width:10%">Pais</th>
                            <th scope="col" class="text-center" style="width:25%">Direccion</th>
                            <th scope="col" class="text-center" style="width:10%">Opciones</th>
                        </tr>
                        ${imprimirFilas()}
                    </table>
                </div>`
    document.getElementById("idTablaPacientes").innerHTML = $table
}

//contador global de los option correspondiente
//al select (cmb) pais
let contadorGlobalOption = cmbPais.children.length
const addPais = () => {
    let paisNew = inputNombrePais.value

    if (paisNew != ""){
        //crear nuevo option con la API DOM
        let option = document.createElement("option")
        option.textContent = paisNew
        option.value = contadorGlobalOption + 1

        //agregar el nuevo option en el select
        cmbPais.appendChild(option)

        //asignar un mensaje a nuestra notificacion
        mensaje.innerHTML = "Pais agregado correctamente"
        //llamar al componente de Bootstrap
        toast.show()
    } else {
        //asignar un mensaje a nuestra notificacion
        mensaje.innerHTML = "Faltan campos por completar"
        //llamar al componente de Bootstrap
        toast.show()
    }
}

//agregar eventos a los botones y utilizar funciones tipo flecha
buttonLimpiarPaciente.onclick = () => {
    limpiarForm()
}
buttonAgregarPaciente.onclick = () => {
    addPaciente()
}
buttonMostrarPaciente.onclick = () => {
    imprimirPacientes()
}
buttonAgregarPais.onclick = () => {
    addPais()
}

//agregar el focus en el campo nombre pais del modal
idModal.addEventListener("show.bs.modal", () => {
    inputNombrePais.value = ""
    inputNombrePais.focus()
})

//ejecutar funcion al momento de cargar la pagina HTML
limpiarForm()