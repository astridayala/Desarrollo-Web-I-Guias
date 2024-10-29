//acceder al contenedor donde se muestran los estudiantes
const containerEstudiantes = document.querySelector("#idContainerEstudiantes")

//acceder a cada boton por medio de API DOM
const btnPromedio = document.querySelector("#idBtnPromedio")

//agregar el evento click a los botones
//se le asigna la funcion que realizara la operacion
btnPromedio.addEventListener("click", generarEstudiantes)

function generarEstudiantes(){
    //arreglo para guardar informacion del estudiante
    let arrayEstudiantes = new Array();

    let totalEstudiantes = document.querySelector("#inputNumeroEstudiantes").value;
    let contador = 1;

    //while para recorrer el total de estudiantes
    let estudiante,
        calificacion,
        convertir = 0;
    while (contador <= totalEstudiantes){
        estudiante = prompt(`Ingrese el nombre del estudiante ${contador}`)

        //verificar si es un valor entero positivo y este en el rango de 0 - 10
        do {
            calificacion = prompt(
                `Ingrese la calificacion del estudiante ${contador}`
            );
            convertir = parseFloat(calificacion)
        } while (isNaN(convertir) || convertir < 0 || convertir > 10)

        //asignar valores al arreglo
        arrayEstudiantes.push(new Array(estudiante, parseFloat(calificacion)))
        contador++;
    }
    //recorre el arreglo con "for of"
    //verifica el promedio de las calificaciones y cual posee la mas alta
    let calificacionAlta = 0,
        promedio = 0,
        posicion = 0;

    let listado = "<h3>Listado de estudiantes registrados</h3>"
    listado += "<ol>"
    for (let estudiante of arrayEstudiantes){
        let nombre = estudiante[0];
        let nota = estudiante[1];
        //imprimir lista de estudiantes
        listado += `<li><b>Nombre:</b> ${nombre} - <b>Calificación:</b> ${nota}</li>`

        //verificar la calificacion mas alta
        if (nota > calificacionAlta){
            posicion = estudiante;
            calificacionAlta = nota;
        }

        //calcular promedio
        promedio += parseFloat(nota)
    }
    listado += "</ol>"
    promedio = parseFloat(promedio / arrayEstudiantes.length).toFixed(2)
    listado += `<p><b>Promedio de calificaciones:</b> ${promedio}`
    listado += `<br><b>Estudiante con mejor calificación:</b> ${posicion[0]}</p>`

    //imprimir resultado
    containerEstudiantes.innerHTML = listado
}