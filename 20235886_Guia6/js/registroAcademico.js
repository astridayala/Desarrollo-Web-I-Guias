document.addEventListener("DOMContentLoaded", function(){
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
    let arrayEstudiantes = new Array()

    //creando funciones
    function addEstudiantes(){
        const inputCarnet = document
            .querySelector("#inputCarnet")
            .value.toString()
            .toUpperCase()
        const inputNombre = document
            .querySelector("#inputNombre")
            .value.toString()
            .toUpperCase()
        const inputApellidos = document
            .querySelector("#inputApellidos")
            .value.toString()
            .toUpperCase()
        
        if (inputCarnet != "" && inputNombre != "" && inputApellidos != ""){
            arrayEstudiantes.push(
                new Array(inputCarnet, inputNombre, inputApellidos)
            )
            alert("Se registro el nuevo estudiante")
            //limpiar campos del formulario
            document.querySelector("#inputCarnet").value = ""
            document.querySelector("#inputNombre").value = ""
            document.querySelector("#inputApellidos").value = ""
            document.querySelector("#inputCarnet").focus()
        } else {
            alert("Faltan campos que completar")
        }
    }
    function viewEstudiantes(){
        //validar si existen los estudiantes registrados
        let totalEstudiantes = arrayEstudiantes.length
        if (totalEstudiantes > 0){
            let carnet
            let nombres
            let apellidos
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

            //
        }
    }

})