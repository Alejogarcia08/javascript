

/* for(let i =10; i >=0; i--){
    if(i===10){
        console.log( `La Bomba Explotara en:  ${i}`)
    }
    else if (i<=9 && i !== 0){
        console.log( `                     :  ${i}`)
    }
    else if (i===0) {
        console.log(`                     BOOM!`)
    }
}

/* /* /* /* const respuesta = prompt("Escriba mayor, para saber a partir de que edad es mayor, o menor, en caso contrario")

    for(let i=1; i<=100; i++){
        
        if(respuesta === "mayor" && i>=18){
            console.log(`Si usted tiene ${i} años, es mayor`)
        }
        else if(respuesta ==="menor"  && i<18){
            console.log(`Si usted tiene ${i} años, es menor`)
        }
        else if(respuesta ===null || respuesta !=="menor" ||respuesta !=="mayor"){
            console.log("No Ingreso Nada Coherente")
        }
    }
 */ 
const ingresePrecio =parseInt( prompt("Ingrese el Precio del Producto Seleccionado"));
    const suma = (precioProducto, iva) =>precioProducto+ iva;
    const resta = (precioProducto, descuento) => precioProducto-descuento;
        let precioProducto= ingresePrecio;
        let descuento= 125
        const iva= precioIngresado => precioProducto * 0.21;
        let nuevoPrecio = resta (suma (precioProducto, iva(precioProducto)), descuento);
        alert(nuevoPrecio); 

    
