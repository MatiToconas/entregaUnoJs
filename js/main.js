// Carrito de compras inicial
let carritoDeCompra = ["notebook", "mouse", "teclado"];

// Función para mostrar el carrito
function verCarritoDeCompra() {
    alert("Carrito de compra: " + carritoDeCompra.join(", "));
}

// Función para agregar productos al carrito
function agregarCarritoDeCompra() {
    const nuevoProducto = prompt("¿Qué producto deseas agregar al carrito?");
    if (nuevoProducto) {
        carritoDeCompra.push(nuevoProducto); // Agrega el producto al array
        alert(`${nuevoProducto} ha sido agregado al carrito.`);
    } else {
        alert("No ingresaste ningún producto.");
    }
}

// Función para quitar productos del carrito
function quitarUltimoProducto() {
    if (carritoDeCompra.length > 0) {
        const productoEliminado = carritoDeCompra.pop(); // Elimina el último elemento
        alert(`${productoEliminado} ha sido eliminado del carrito.`);
    } else {
        alert("El carrito está vacío, no hay productos para eliminar.");
    }
}

// Calcular cuotas de la compra
function dividirEnCuotas () {
    const monto = parseInt(prompt("Ingrese el monto a calcular"))
    const cuotas = parseInt(prompt("Ingrese la cantidad de cuotas: 3 | 6 | 9 | 12"))

   const dividirEnCuotas = (monto, cuotas) => monto/cuotas
   const resultado = dividirEnCuotas(monto, cuotas) 
   alert("Usted va abonar: $"+resultado+ " por mes en la cuota seleccionada");      
}

// Menu Principal
let opcion = parseInt(prompt("Elija una opcion: \n 1-Ver productos \n 2-Agregar productos \n 3-Quitar productos \n 4-Calcular cuotas \n 5-Salir"))

while(opcion !== 5) {
    switch(opcion) {
        case 1:
            verCarritoDeCompra()
            break
        case 2:
            agregarCarritoDeCompra()
            break
        case 3:
            quitarCarritoDeCompra()
            break
        case 4: 
            dividirEnCuotas()
            break
        default:
            alert("Opcion incorrecta")
    }
    opcion = parseInt(prompt("Elija una opcion: \n 1-Ver productos \n 2-Agregar productos \n 3-Quitar productos \n 4-Calcular cuotas \n 5-Salir"))
}

alert("Presione la tecla nter para cerrar el sistema")