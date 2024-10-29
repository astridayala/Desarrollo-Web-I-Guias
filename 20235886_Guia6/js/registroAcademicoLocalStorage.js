//contenedor donde se mostraran los estudiantes
const containerEstudiantes = document.querySelector(
    "#idContainerEstudiantes"
)

//acceso a cada boton por medio de la API DOM
const btnAddEstudiante = document.querySelector("#idBtnAgregarEstudiante")
const btnViewEstudiantes = document.querySelector("#idBtnMostrarEstudiantes")

//agregar evento click a los botones, se asigna la funcion que realizaran
btnAddEstudiante.addEventListener("click", addEstudiantes)
btnViewEstudiantes.addEventListener("click", viewEstudiantes)

//arreglo global
let arrayEstudiantes = JSON.parse(localStorage.getItem("estudiantes")) || []

//creando funciones
function addEstudiantes(){
    const inputCarnet = document
        .querySelector("#inputCarnet")
        .value.trim()
        .toUpperCase()
    const inputNombre = document
        .querySelector("#inputNombre")
        .value.trim()
        .toUpperCase()
    const inputApellidos = document
        .querySelector("#inputApellidos")
        .value.trim()
        .toUpperCase()
    
    if (inputCarnet != "" && inputNombre != "" && inputApellidos != ""){
        const estudiante = {
            carnet: inputCarnet,
            nombre: inputNombre,
            apellido: inputApellidos,
        }
        arrayEstudiantes.push(estudiante)
        localStorage.setItem("estudiantes", JSON.stringify(arrayEstudiantes))
        alert("Se registro el nuevo estudiante")
        //limpiar campos del formulario
        document.querySelector("#inputCarnet").value = ""
        document.querySelector("#inputNombre").value = ""
        document.querySelector("#inputApellidos").value = ""
        document.querySelector("#inputCarnet").focus()
        viewEstudiantes()
    } else {
        alert("Faltan campos que completar")
    }
}
function viewEstudiantes(){
    //validar si existen los estudiantes registrados
    arrayEstudiantes = JSON.parse(localStorage.getItem("estudiantes"))||[]
    let totalEstudiantes = arrayEstudiantes.length
    if (totalEstudiantes > 0){
        let table = "<table class = 'table table-light table-striped'>"
        table += "<thead>"
        table += "<tr>"
        table += "<th scope='col' style='width: 5%;'>#</th>"
        table += "<th scope='col' style='width: 15%;'>Carnet</th>"
        table += "<th scope='col'>Nombres</th>"
        table += "<th scope='col'>Apellidos</th>"
        table += "</tr>"
        table += "</thead>"
        table += "<tbody>"
        
        let i = 0

        //utilizaremos un bucle for para recorrer el arreglo de estudiantes
        for (const estudiante of arrayEstudiantes) {
            i++;
            //destructuracion
            let {carnet, nombre, apellido, dui, nit, fechaNac, correo, edad} = estudiante;

            table += `<tr>`
            table += `<td scope='row style='font-weight:bold;'>${i}</td>`
            table += `<td>${carnet}</td>`
            table += `<td>${nombre}</td>`
            table += `<td>${apellido}</td>`
            table += `</tr>`;
        }
        table += "</tbody>"
        table += "</table>"
        containerEstudiantes.innerHTML = table
    } else {
        alert("No se han registrado estudiantes")
    }
}