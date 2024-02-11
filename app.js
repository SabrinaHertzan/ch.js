document.addEventListener("DOMContentLoaded", function () {
    const carritoLista = document.getElementById("carritoLista");
    const totalCarrito = document.getElementById("totalCarrito");
    const productos = document.querySelectorAll(".seleccionar-producto");
    const finalizarCompraBtn = document.getElementById("finalizarCompra");

    let carrito = [];
    let total = 0;

    function actualizarCarrito() {
        carritoLista.innerHTML = "";
        total = 0;
        carrito.forEach((producto) => {
            const item = document.createElement("li");
            item.innerText = `${producto.nombre} - $${producto.precio}`;
            carritoLista.appendChild(item);
            total += producto.precio;
        });
        totalCarrito.innerText = total.toFixed(2);
    }

    productos.forEach((producto) => {
        producto.addEventListener("click", () => {
            const nombre = producto.getAttribute("data-nombre");
            const precio = parseFloat(producto.getAttribute("data-precio"));
            carrito.push({ nombre: nombre, precio: precio });
            actualizarCarrito();
            alert(`Producto ${nombre} agregado al carrito`);
        });
    });

    finalizarCompraBtn.addEventListener("click", () => {
        alert("Compra finalizada");
        carrito = []; 
        actualizarCarrito();
    });

});


document.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault();

    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var mail = document.getElementById('mail').value;
    var telefono = document.getElementById('telefono').value;
    var comentario = document.getElementById('Comentario').value;

    if (!validarDatos(nombre, apellido)) {
        limpiarCampos();
        return;
    }
 
    var datos = {
        nombre: nombre,
        apellido: apellido,
        mail: mail,
        telefono: telefono,
        comentario: comentario
    };
    var datosJSON = JSON.stringify(datos);

    localStorage.setItem("formularioData", datosJSON);

    alert ("El formulario fue enviado correctamente")

    limpiarCampos();

    console.log('Formulario enviado y datos almacenados en localStorage:');
    console.log('Nombre: ', nombre);
    console.log('Apellido: ', apellido);
    console.log('Email: ', mail);
    console.log('Teléfono: ', telefono);
    console.log('Comentario: ', comentario);
});

function validarDatos(nombre, apellido) {
    if (isNaN(nombre) && isNaN(apellido) ) {
        return true;  
    } else {
        alert("Error: Los datos ingresados son incorrectos. Por favor, corrobore los campos nombre y apellido.");
        return false;  
    }
}

function limpiarCampos() {
    document.getElementById('nombre').value = "";
    document.getElementById('apellido').value = "";
    document.getElementById('mail').value = "";
    document.getElementById('telefono').value = "";
    document.getElementById('Comentario').value = "";
}
