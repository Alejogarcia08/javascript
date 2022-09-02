let productosDiv = document.getElementById("productos")
let carrito = JSON.parse(localStorage.getItem("carrito")) || []

/* MOSTRAR PRODUCTOS */
function mostrarProductos(array) {
    array.forEach(producto => {
        productosDiv.innerHTML += `
        <div class="producto">
        <img src=${producto.img} alt="">
        <p>${producto.name} $${producto.price}<p>
        <button class="agregar" id=${producto.id}>Agregar al carrito</button>
        </div>`

    });
}
mostrarProductos(products) /* con esto lo muestro en pantalla */

/* AGREGAR AL CARRITO */
let botonAgregar = document.getElementsByClassName("agregar")
const divCarrito = document.querySelector("#carrito")
const carritoSelection = document.querySelector("#carritoSelection")
const vaciar = document.getElementById("vaciar")

function agregarAlCarrito(event) {
    divCarrito.innerHTML = ""
    const boton = event.target;
    const idBoton = boton.getAttribute("id");
    let productoSeleccionado = products.find(producto => producto.id === idBoton)
    carrito.push(productoSeleccionado)
    console.log(carrito)
    /* storage */

    localStorage.setItem("carrito", JSON.stringify(carrito));

    swal({
        title: "Genial!",
        text: "Agregaste " + productoSeleccionado.name + " al carrito!",
        icon: "success",
        button: "OK",
    });


    

}

for (boton of botonAgregar) {
    boton.addEventListener("click", agregarAlCarrito)
}


