let carrito2 = JSON.parse(localStorage.getItem("carrito")) || []
const detalle = document.querySelector("#detalle")
const divCarrito = document.querySelector("#carrito")
const vaciar = document.getElementById("vaciar")

/* const grupo = groupBy(carrito2, producto => producto.id) || [];
console.log(grupo)
function groupBy(list, keyGetter) {
    const map = new Map();
    list.forEach((item) => {
        const key = keyGetter(item);
        const collection = map.get(key);
        if (!collection) {
            map.set(key, [item]);
        } else {
            collection.push(item);
        }
    });
    return map;
} */
function productosCarrito() {

    carrito2.map(producto => {
        divCarrito.innerHTML += `
        <li class="detalleProd">
        <img src="${producto.img}"/>
        <p>${producto.name}</p>
        <p>${producto.price}</p>
        <button class="botonBorrar" id="${producto.id}">X</button>
        </li>`
    })

    /* suma */
    let total = carrito2.reduce((acc, curr) => acc + parseInt(curr.price), 0)
    let totalCompra = document.createElement("p")
    totalCompra.setAttribute("class", "total")
    totalCompra.innerText = ("Total: " + total)
    divCarrito.append(totalCompra)

    let botonBorrar = document.getElementsByClassName("botonBorrar")


    for (botonX of botonBorrar) {
        botonX.addEventListener("click", eliminarProducto)
    }

    //vaciar carrito
    vaciar.addEventListener("click", () => {
        carrito2 = []
        localStorage.clear()
        detalle.innerHTML = "<h3>El carrito está vacío</h3>"
    })
}

//ELIMINAR PRODUCTO
function eliminarProducto(event) {
    divCarrito.innerHTML = ""
    const botonX = event.target;
    const idBotonX = botonX.getAttribute("id");
    let indexProducto = carrito2.findIndex(producto => producto.id === idBotonX)
    carrito2.splice(indexProducto, 1)
    localStorage.removeItem("carrito")
    localStorage.setItem("carrito", JSON.stringify(carrito2))
    productosCarrito()
}


// el carrito tiene productos ? si tiene, mostrarlos : si no tiene mostrar mensaje
carrito2.length ? productosCarrito() : (detalle.innerHTML = `<h3>El carrito está vacío</h3>`)


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
}