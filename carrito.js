/* let carrito2 = JSON.parse(localStorage.getItem("carrito")) || []
const detalle = document.querySelector("#detalle")

function productosCarrito() {
    carrito2.map(producto => {
        detalle.innerHTML += `
        <li class="detalleProd">
        <img src="${producto.img}"/>
        <p>${producto.name}</p>
        <p>${producto.price}</p>
        <button class="botonBorrar">X</button>
        </li>`
    })
}


// el carrito tiene productos ? si tiene, mostrarlos : si no tiene mostrar mensaje
carrito2.length ? productosCarrito() : (detalle.innerHTML=`<h3>El carrito está vacío <br/> :(</h3>`)


//FORMULARIO
let nombre = document.querySelector("#nombre")
let mail = document.querySelector("#mail")
let telefono = document.querySelector("#telefono")
let direccion = document.querySelector("#direccion")
let divConfirmacion = document.querySelector("#confirmacion")
let submit = document.querySelector("#submit")
let formulario = document.querySelector("#form")

function terminarCompra() {

    if (nombre.value !== "" && mail.value !== "" && telefono.value !== "" && direccion.value !== "") {
        divConfirmacion.innerHTML = `
<h3>Gracias por tu compra ${nombre.value}!</h3>
<p>En 2/3 días hábiles lo estaremos enviando a ${direccion.value}</p>
`
    } else {
        divConfirmacion.innerHTML = `
        <h3>Por favor complete todos los campos</h3>`
    }
}


formulario.onsubmit = (e) => {
    e.preventDefault()
    terminarCompra()
    formulario.reset()
} */