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

        if (inputCarnet && inputNombre && inputApellidos) {
            const estudiante = {
                carnet: inputCarnet,
                nombre: inputNombre,
                apellido: inputApellidos,
            };
            arrayEstudiantes.push(estudiante);
            alert("Se registró el nuevo estudiante");

            // Limpiar campos del formulario
            document.querySelector("#inputCarnet").value = "";
            document.querySelector("#inputNombre").value = "";
            document.querySelector("#inputApellidos").value = "";
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
            table += "<th scope='col' style='width: 15%;'>Carnet</th>";
            table += "<th scope='col'>Nombres</th>";
            table += "<th scope='col'>Apellidos</th>";
            table += "</tr>";
            table += "</thead>";
            table += "<tbody>";

            let i = 0;

            // Utilizar un bucle for para recorrer el arreglo de estudiantes
            for (const estudiante of arrayEstudiantes) {
                i++;
                // Desestructuración
                let { carnet, nombre, apellido } = estudiante;

                table += `<tr>`;
                table += `<td scope='row' style='font-weight:bold;'>${i}</td>`;
                table += `<td>${carnet}</td>`;
                table += `<td>${nombre}</td>`;
                table += `<td>${apellido}</td>`;
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
