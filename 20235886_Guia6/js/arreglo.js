//acceder al contenedor donde se muestran los estudiantes
const containerArreglo = document.querySelector("#idContainerArreglo")
const containerArregloOrdenado = document.querySelector("#idContainerArregloOrdenado")

//acceso a cada boton por medio de API DOM
const btnAgregar = document.querySelector("#idBtnAgregar")
const btnOrdenar = document.querySelector("#idBtnOrdenar")

//agregar evento click a los botones, se les asigna la funcion que realiza la operacion
btnAgregar.addEventListener("click", agregarElemento)
btnOrdenar.addEventListener("click", ordenarElementos)

let arreglo = new Array()

function agregarElemento(){
    const numero = parseInt(document.querySelector("#inputNumero").value)
    //verificar si es numero
    if (isNaN(numero)){
        alert("Debe ingresar un número válido")
    } else {
        //agregar un nuevo elemento al arreglo
        arreglo.push(numero)

        //utilizar API DOM para crear un elemento html
        //SE CREARON LOS DIV DONDE SE ALMACENAN LOS NUMEROS
        //CREAR NUEVOS ELEMENTOS HTML
        let caja = document.createElement("div") //crear elemento div
        caja.className = "col-md-1 colum" //agregar una clase al elemento div
        let valor =  document.createElement("h3") //crear elemento h3
        valor.textContent = numero //agregar un texto al elemento h3
        caja.appendChild(valor) //pasar un hijo la etiqueta "h3" a nuestro "div"

        //insertar nuevos elementos en el contenedor
        //se utiliza beforeend para insertar el nuevo
        //elemento dentro del idContainerArreglo y despues de su ultimo hijo
        containerArreglo.insertAdjacentElement("beforeend", caja)
    }
}
function ordenarElementos(){
    //utilizar un for...of para recorrer el arreglo
    //se utiliza .sort() para ordenarlo
    for(let i of arreglo.sort((a,b) => a-b)){
        let caja = document.createElement("div")
        caja.className = "col-md-1 colum-green"
        let valor = document.createElement("h3")
        valor.textContent = i
        caja.appendChild(valor)
        containerArregloOrdenado.insertAdjacentElement("beforeend",caja)
    }
}