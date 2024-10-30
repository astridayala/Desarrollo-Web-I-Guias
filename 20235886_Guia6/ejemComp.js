document.addEventListener("DOMContentLoaded", function() {
    // Contenedor donde se mostrarán los estudiantes
    const containerEstudiantes = document.querySelector("#idContainerEstudiantes");

    // Acceso a cada botón por medio de la API DOM
    const btnAddEstudiante = document.querySelector("#idBtnAgregarEstudiante");
    const btnViewEstudiantes = document.querySelector("#idBtnMostrarEstudiantes");

    // Agregar evento click a los botones, se asigna la función que realizarán
    btnAddEstudiante.addEventListener("click", addEstudiantes);
    btnViewEstudiantes.addEventListener("click", viewEstudiantes);

    // Arreglo global
    let arrayEstudiantes = [];

    // Creando funciones
    function addEstudiantes() {
        const inputCarnet = document.querySelector("#inputCarnet")
        .value.trim()
        .toUpperCase();
        const inputNombre = document.querySelector("#inputNombre")
        .value.trim()
        .toUpperCase();
        const inputApellidos = document.querySelector("#inputApellidos")
        .value.trim()
        .toUpperCase();
        const inputDUI = document.querySelector("#inputDUI")
        .value.trim();
        const inputNIT = document.querySelector("#inputNIT")
        .value.trim();
        const inputFechaNacimiento = document.querySelector("#inputFechaNacimiento")
        .value.trim();
        const inputCorreoElectronico = document.querySelector("#inputCorreoElectronico")
        .value.trim();
        const inputEdad = document.querySelector("#inputEdad")
        .value.trim();

        if (inputCarnet && inputNombre && inputApellidos && inputDUI && inputNIT && inputFechaNacimiento && inputCorreoElectronico && inputEdad) {
            const estudiante = {
                carnet: inputCarnet,
                nombre: inputNombre,
                apellido: inputApellidos,
                dui: inputDUI,
                nit: inputNIT,
                fechaNac: inputFechaNacimiento,
                correo: inputCorreoElectronico,
                edad: inputEdad
            };
            arrayEstudiantes.push(estudiante);
            alert("Se registró el nuevo estudiante");

            // Limpiar campos del formulario
            document.querySelector("#inputCarnet").value = "";
            document.querySelector("#inputNombre").value = "";
            document.querySelector("#inputApellidos").value = "";
            document.querySelector("#inputDUI").value = "";
            document.querySelector("#inputNIT").value = "";
            document.querySelector("#inputFechaNacimiento").value = "";
            document.querySelector("#inputCorreoElectronico").value = "";
            document.querySelector("#inputEdad").value = "";
            document.querySelector("#inputCarnet").focus();

            viewEstudiantes();
        } else {
            alert("Faltan campos que completar");
        }
    }

    function viewEstudiantes() {
        // Validar si existen los estudiantes registrados
        let totalEstudiantes = arrayEstudiantes.length;
        if (totalEstudiantes > 0) {
            let table = "<table class='table table-light table-striped'>";
            table += "<thead>";
            table += "<tr>";
            table += "<th scope='col' style='width: 5%;'>#</th>";
            table += "<th scope='col'>Carnet</th>";
            table += "<th scope='col'>Nombres</th>";
            table += "<th scope='col'>Apellidos</th>";
            table += "<th scope='col'>DUI</th>";
            table += "<th scope='col'>NIT</th>";
            table += "<th scope='col'>Fecha de Nacimiento</th>";
            table += "<th scope='col'>Correo electrónico</th>";
            table += "<th scope='col'>Edad</th>";
            table += "</tr>";
            table += "</thead>";
            table += "<tbody>";

            let i = 0;

            // Utilizar un bucle for para recorrer el arreglo de estudiantes
            for (const estudiante of arrayEstudiantes) {
                i++;
                // Desestructuración
                let { carnet, nombre, apellido, dui, nit, fechaNac, correo, edad } = estudiante;

                table += `<tr>`;
                table += `<td scope='row' style='font-weight:bold;'>${i}</td>`;
                table += `<td>${carnet}</td>`;
                table += `<td>${nombre}</td>`;
                table += `<td>${apellido}</td>`;
                table += `<td>${dui}</td>`;
                table += `<td>${nit}</td>`;
                table += `<td>${fechaNac}</td>`;
                table += `<td>${correo}</td>`;
                table += `<td>${edad}</td>`;
                table += `</tr>`;
            }
            table += "</tbody>";
            table += "</table>";
            containerEstudiantes.innerHTML = table;
        } else {
            alert("No se han registrado estudiantes");
        }
    }
});

function formatoDUI() {
    const inputDUI = document.getElementById("inputDUI");
    let dui = inputDUI.value.replace(/\D/g, ''); 
    if (dui.length > 8) {
        dui = dui.slice(0, 8) + '-' + dui.slice(8,9)

    }
    inputDUI.value = dui;
}
function formatoNIT() {
    const inputNIT = document.getElementById("inputNIT");
    let nit = inputNIT.value.replace(/\D/g, ''); 
    if (nit.length > 4 && nit.length <= 10) {
        nit = nit.slice(0, 4) + '-' + nit.slice(4)
    } else if (nit.length > 10 && nit.length <= 13) { 
        nit = nit.slice(0, 4) + '-' + nit.slice(4, 10) + '-' + nit.slice(10)
    } else if (nit.length > 13) {
        nit = nit.slice(0, 4) + '-' + nit.slice(4, 10) + '-' + nit.slice(10, 13) + '-' + nit.slice(13, 14)
    }
    inputNIT.value = nit;
}

function formulario(){
    
    const carnetFormato = /^[A-Z]{2}\d{3}$/
    const carnet = document.getElementById("inputCarnet")
    .value.trim()
    .toUpperCase()
    if (!carnetFormato.test(carnet)) {
        alert("Carnet incorrecto (por ejemplo, AB001)");
        return false;
    }

    const nombreApellidoFormato = /^[a-zA-Z]+$/
    const nombre = document.getElementById("inputNombre")
    .value.trim()
    const apellidos = document.getElementById("inputApellidos")
    .value.trim()
    if (!nombreApellidoFormato.test(nombre)) {
        alert("El nombre solo posee letras");
        return false;
    }
    if (!nombreApellidoFormato.test(apellidos)) {
        alert("Los apellidos solo poseen letras");
        return false;
    }

    const correoFormato = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/
    const correo = document.getElementById("inputCorreoElectronico")
    .value.trim()
    if (!correoFormato.test(correo)) {
        alert("Correo electrónico inválido (correo@gmail.com).");
        return false;
    }

    const DUIFormato = /^\d{8}-\d$/
    const dui = document.getElementById("inputDUI")
    .value.trim()
    if (!DUIFormato.test(dui)) {
        alert("DUI invaludo (########-#).");
        return false;
    }

    const NITFormato = /^\d{4}-\d{6}-\d{3}-\d$/
    const nit = document.getElementById("inputNIT")
    .value.trim()
    if (!NITFormato.test(nit)) {
        alert("NIT invalido (####-######-###-#).");
        return false;
    }

    const edad = document.getElementById("inputEdad")
    .value.trim()
    if (isNaN(edad) || edad === "" || edad <= 0) {
        alert("La edad es un número positivo.");
        return false;
    }
    return true

}