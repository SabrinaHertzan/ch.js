 // Vendedor
  let  quienSoy = prompt ("¿Eres empleado?");
 
 if(quienSoy == "si")
 {
 const empleadaA = "Camila"
 const empleadoB = "Julián"
 
 let producto1 = 12000
 let producto2 = 11500
 let producto3 = 26700

 let totalCamila = producto1 + producto2
 let totalJulian = producto3

  if (totalCamila >= 25000) {
    let ganancia = totalCamila * 0.15;
    alert(empleadaA + ", tenes un 15% extra en tu salario. Total de ganancia: $" + (ganancia));
} else {
    alert(empleadaA + ", tus ventas no superaron el objetivo. Total de ventas: $" + totalCamila);
}

if (totalJulian >= 25000) {
    let ganancia = totalJulian * 0.15;
    alert(empleadoB + ", tenes un 15% extra en tu salario. Total de ganancia: $" + (ganancia));
} else {
    alert(empleadoB + ", tus ventas no superaron el objetivo. Total de ventas: $" + totalJulian);
}
}

else{

    //Cliente

    let continuar = true;

    while(continuar){ 
        let correoIngresado = prompt ("Ingrese su correo electrónico para recibir nuestras ofertas");
        console.log(correoIngresado);

        let nombreIngresado = prompt ("Ingrese su nombre");
        console.log(nombreIngresado);
        
        if (!isNaN(correoIngresado) || correoIngresado === "" || !isNaN(nombreIngresado) || nombreIngresado === "") {
            alert("Error: ingresar correo y nombre");
        } else {
            continuar = false;
            alert("correo: " + correoIngresado + " nombre: " + nombreIngresado);
        }    
    }
}
 

 let consulta = confirm("¿Te puedo ayudar en tu búsqueda?");
 if(consulta === true){
    let joyas = prompt("¿Qué joya estás buscando?")
    let articulos = prompt ("Elegí tús " +joyas)

    switch(articulos){
        case "aros":
            alert("Tenemos varios " +articulos)
            break;
        case "cadenas":
            alert("Tenemos varios " +articulos)
            break;
        case "anillos":
            alert("Tenemos varios " +articulos)
            break;
        
        default:
            alert("No tenemos " +articulos)
    }
 }

 const Descuento = 0.85

 function calcularDescuento(importe){
    let resultado = importe * Descuento
    alert("el importe con el descuento es: " +resultado)
 }

 calcularDescuento(12000)