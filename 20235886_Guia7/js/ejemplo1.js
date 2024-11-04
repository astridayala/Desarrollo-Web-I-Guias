//acceso al formulario con los nuevos elementos
const newForm = document.getElementById("idNewForm")

//acceso a las referencias de botones
const buttonClear = document.getElementById("idBtnClear") 
const buttonAddElemento = document.getElementById("idBtnAddElement")

//acceso al select para determinar el tipo de elemento a crear
const cmbElemento = document.getElementById("idCmbElemento")

//acceso a los controles del modal
const tituloElemento = document.getElementById("idTituloElemento")
const nombreElemento = document.getElementById("idNombreElemento")

//crear modal con bootstrap
const modal = new bootstrap.Modal(document.getElementById("idModal",{}))

//agregar funciones
const vericarTipoElemento = function(){
    let elemento = cmbElemento.value 
    //valida la seleccion de un elemento
    if(elemento != ""){
        //metodo del modal de bootstrap
        modal.show()
    } else {
        alert("Debe seleccionar el elemento que se creara")
    }
}

const newSelect = function(){
    //crear elementos
    let addElemento = document.createElement("select")
    //crear atributos para el nuevo elemento
    addElemento.setAttribute("id", `id${nombreElemento.value}`)
    addElemento.setAttribute("class","form-select")

    //crear option para el select
    for (let i = 1; i <= 10; i++){
        let addOption = document.createElement("option")
        addOption.value = i
        addOption.innerHTML = `Opcion ${i}`
        addElemento.appendChild(addOption)
    }

    //crear label para el nuevo control
    let labelElemento = document.createElement("label")
    labelElemento.setAttribute("for", `id${nombreElemento.value}`)
    //crear texto para label
    labelElemento.textContent = tituloElemento.value

    //crear label de id
    let labelId = document.createElement("span")
    labelId.textContent = `ID de control: ${nombreElemento.value}`

    //crear plantilla de bootstrap para visualizar el nuevo elemento
    let divElemento = document.createElement("div")
    //agregar atributos
    divElemento.setAttribute("class","form-floating")

    //crear el input que sera hijo del div
    divElemento.appendChild(addElemento)
    //crear el label que sera hijo del div
    divElemento.appendChild(labelElemento)

    //crear span que sera hijo del nuevo formulario
    newForm.appendChild(labelId)

    //crear el div que sera hijo del nuevo formulario
    newForm.appendChild(divElemento)
}
const newRadioCheckbox = function(newElemento){
    //crear elementos
    let addElemento = document.createElement("input")
    //crear atributos para el nuevo elemento
    addElemento.setAttribute("id",`id${nombreElemento.value}`)
    addElemento.setAttribute("type", newElemento)
    addElemento.setAttribute("class","form-check-input")

    //crear label para nuevo control
    let labelElemento = document.createElement("label")
    labelElemento.setAttribute("class","form-check-label")
    labelElemento.setAttribute("for",`id${newElemento.value}`)
    //crear texto para label
    labelElemento.textContent = tituloElemento.value

    //crear label de id
    let labelId = document.createElement("span")
    labelId.textContent = `ID de control: ${nombreElemento.value}`

    //crear plantilla de bootstrap para visualizar el nuevo elemento
    let divElemento = document.createElement("div")
    //agregar atributos
    divElemento.setAttribute("class","form-check")

    //crear el input que sera hijo del div
    divElemento.appendChild(addElemento)
    //crear el label que sera hijo del div
    divElemento.appendChild(labelElemento)

    //crear span que sera hijo del nuevo formulario
    newForm.appendChild(labelId)

    //crear div que sera hijo del nuevo formulario
    newForm.appendChild(divElemento)
}
const newInput = function(newElemento){
    //crear elementos de tipo: text, number, date y password
    let addElemento =
        newElemento == "textarea"
            ? document.createElement("textarea")
            : document.createElement("input")

    //crear atributos para el nuevo elemento
    addElemento.setAttribute("id",`id${newElemento.value}`)
    addElemento.setAttribute("type",newElemento)
    addElemento.setAttribute("class","form-control")
    addElemento.setAttribute("placeholder", tituloElemento.value)

    //crear label para el nuevo control
    let labelElemento = document.createElement("label")
    labelElemento.setAttribute("for",`id${nombreElemento.value}`)

    //crear icono para el label
    let iconLabel = document.createElement("i")
    iconLabel.setAttribute("class","bi bi-tag")

    //crear texto para label
    labelElemento.textContent = tituloElemento.value

    //crear elemento "i" como hijo del label
    //afterbegin indica que se creara antes de su primer hijo
    labelElemento.insertAdjacentElement("afterbegin", iconLabel)

    //crear label de id
    let labelId = document.createElement("span")
    labelId.textContent = `ID de control: ${nombreElemento.value}`

    //crear plantilla de bootstrap para visualizar el nuevo elemento
    let divElemento = document.createElement("div")
    //agregar atributos
    divElemento.setAttribute("class","form-floating mb-3")

    //crear el input que sera hijo del div
    divElemento.appendChild(addElemento)
    //crear el label que sera hijo del div
    divElemento.appendChild(labelElemento)

    //crear span que sera hijo del nuevo formulario
    newForm.appendChild(labelId)

    //crear div que sera hijo del nuevo formulario
    newForm.appendChild(divElemento)
}
//agregar evento click a los botones
buttonClear.onclick = () => {
    vericarTipoElemento()
}
buttonAddElemento.onclick = () => {
    if(nombreElemento.value != "" && tituloElemento.value != ""){
        let elemento = cmbElemento.value

        if(elemento == "select"){
            newSelect()
        } else if(elemento == "radio" || elemento == "checkbox") {
            newRadioCheckbox(elemento)
        } else {
            newInput(elemento)
        }
    } else {
        alert("Faltan campos por completar")
    }
}
//agregar evento para el modal de bootstrap
document.getElementById("idModal").addEventListener("shown.bs.modal", () => {
    //limpiar campos para los nuevos elementos
    tituloElemento.value = ""
    nombreElemento.value = ""
    //iniciar puntero en el campo del titulo para el control
    tituloElemento.focus()
})