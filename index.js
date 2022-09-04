
//validacion de formulario de contacto
console.log(document.forms)

const formulario = document.querySelector("#formulario")
const inputNombre = document.querySelector("#nombre")
const inputEmail = document.querySelector("#email")
const inputMensaje = document.querySelector("#mensaje")
const submit = document.querySelector("#submit")

console.log(formulario, inputNombre, inputEmail, inputMensaje)

const clientes = []

class Cliente {
    constructor(nombre, email, mensaje) {
        this.nombre = nombre;


        this.email = email;
        this.mensaje = mensaje;
    }
}

formulario.onsubmit = (event) => {
    event.preventDefault()
    console.log(event)
    clientes.push(new Cliente(inputNombre.value, inputEmail.value, inputMensaje.value))
    console.log(clientes)

    formulario.reset()
}

inputNombre.onchange = () => {

    if (inputNombre.value.length <= 2) {
        alert("Su Nombre es muy corto")
        inputNombre.style.border = "2px solid red";
        submit.disabled = true;

    } else {

        inputNombre.style.border = "2px solid green";
        submit.disabled = false;
    }
}



inputEmail.onchange = () => {

    if (inputEmail.value.length <= 2) {

        inputEmail.style.border = "2px solid red";
        submit.disabled = true;
    } else {
        inputEmail.style.border = "2px solid green";
        submit.disabled = false;
    }
}
inputMensaje.onchange = () => {

    if (inputMensaje.value.length <= 2) {

        inputMensaje.style.border = "2px solid red";
        submit.disabled = true;
    } else {
        inputMensaje.style.border = "2px solid green";
        submit.disabled = false;
    }
}