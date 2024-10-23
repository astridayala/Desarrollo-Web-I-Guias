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

    
})