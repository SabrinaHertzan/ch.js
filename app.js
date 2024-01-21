function Joya(material, precio) {
    this.material = material;
    this.precio = precio;
}

function validarCorreoYNombre(correoIngresado, nombreIngresado) {
    if (isNaN(correoIngresado) && correoIngresado.trim() !== "" && isNaN(nombreIngresado) && nombreIngresado.trim() !== "") {
        return true;  
    } else {
        alert("Error: Los datos ingresados son incorrectos. Por favor, ingrese un correo y un nombre válidos.");
        return false;  
    }
}


function obtenerProductos(categoria) {
    const productos = {
        aros: [
            { nombre: "Aro1", precio: 15000 },
            { nombre: "Aro2", precio: 16000 },
            { nombre: "Aro3", precio: 17000 }
        ],
        collares: [
            { nombre: "Collar1", precio: 20000 },
            { nombre: "Collar2", precio: 22000 },
            { nombre: "Collar3", precio: 24000 }
        ],
        pulseras: [
            { nombre: "Pulsera1", precio: 18000 },
            { nombre: "Pulsera2", precio: 19000 },
            { nombre: "Pulsera3", precio: 20000 }
        ]
    };

    return productos[categoria] || [];
}

function obtenerRespuestaSiNo(pregunta) {
    let respuesta;
    do {
        respuesta = prompt(pregunta).toUpperCase();
    } while (respuesta !== "SI" && respuesta !== "NO");

    return respuesta;
}

function mostrarProductosYCalcularDescuento() {
    const Descuento = 0.85;

    let estaRegistrado;

    do {
        estaRegistrado = obtenerRespuestaSiNo("¿Estás registrado en la página? (SI/NO)");

        if (estaRegistrado === "NO") {
            let correoIngresado = prompt("Ingrese su correo electrónico para registrarse");
            let nombreIngresado = prompt("Ingrese su nombre");

            if (validarCorreoYNombre(correoIngresado, nombreIngresado)) {
                alert("¡Gracias por registrarte!\nCorreo: " + correoIngresado + "\nNombre: " + nombreIngresado);
            }
        } else if (estaRegistrado !== "SI") {
            alert("Respuesta no válida. Por favor, responda con 'SI' o 'NO'.");
        }

    } while (estaRegistrado !== "SI");

    do {
        let categoriaElegida = prompt("¿Qué productos deseas ver?\nOpciones: Aros, Collares, Pulseras");
        let productos = obtenerProductos(categoriaElegida.toLowerCase());

        if (productos.length === 0) {
            alert("Categoría no válida o sin productos disponibles.");
            return;
        }

        alert("Productos disponibles en la categoría " + categoriaElegida + ":");

        for (let i = 0; i < productos.length; i++) {
            alert("Nombre: " + productos[i].nombre + "\nPrecio: $" + productos[i].precio);
        }

        let productoElegido = prompt("¿Qué producto deseas comprar?");
        let productoSeleccionado = productos.find(producto => producto.nombre.toLowerCase() === productoElegido.toLowerCase());

        if (productoSeleccionado) {
            let precioConDescuento = productoSeleccionado.precio * Descuento;
            alert("Usted ha elegido " + productoSeleccionado.nombre + ". El precio con descuento es: $" + precioConDescuento);
        } else {
            alert("Producto no válido. La compra no se completó.");
        }

        estaRegistrado = obtenerRespuestaSiNo("¿Quieres seguir comprando? (SI/NO)");

    } while (estaRegistrado === "SI");

    alert("Muchas gracias por su compra, lo esperamos pronto!!");
}

function iniciarProceso() {
    mostrarProductosYCalcularDescuento();
}

iniciarProceso();
