//acceder al contenedor donde se mostrara los estudiantes
const containerResultado = document.querySelector("#idContainerResultado")

//acceder a cada boton por medio de la API DOM
const btnCalcular = document.querySelector("#idBtnCalcular")

//agregar el evento click al boton calcular
//se le asigna la funcion que realizara la operacion
btnCalcular.addEventListener("click", calcularTabla)

function calcularTabla(){
    //captura el valor del campo
    const inputTabla = document.querySelector("#inputTabla").value

    //inicia el contador
    let contador = 1

    //verificar que el numero entero sea positivo
    if (inputTabla > 0){
        let tabla = `<h2>Tabla de multiplicar del ${inputTabla}<h2>`
        //usar "do-while" para generar la tabla de multiplicar que el usuario ha indicado
        do {
            let resultado = contador * inputTabla;
            tabla += `<div class="row text-center">`;
            tabla += `<div class="col-md-1 colum"><h3>${contador}</h3></div>`;
            tabla += `<div class="col-md-1 colum-green"><h3>x</h3></div>`;
            tabla += `<div class="col-md-1 colum"><h3>${inputTabla}</h3></div>`;
            tabla += `<div class="col-md-1 colum-green"><h3>=</h3></div>`;
            tabla += `<div class="col-md-1 column"><h3>${resultado}</h3></div>`;
            tabla += `</div>`

            //incrementa el contador para salir del "do-while"
            contador++;
        } while(contador <= 12)

        document.querySelector("#inputTabla").value = 1
        document.querySelector("#inputTabla").focus()
        containerResultado.innerHTML = tabla
    } else {
        alert("No se ha ingresado un número válido")
    }
}