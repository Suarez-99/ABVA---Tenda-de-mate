let carrito = [];
let contador = 0;

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    contador++;
    actualizarCarrito();
}

function actualizarCarrito() {
    const contadorElemento = document.getElementById("carrito-contador");
    contadorElemento.innerText = contador;

    const itemsElemento = document.getElementById("carrito-items");
    itemsElemento.innerHTML = "";

    let total = 0;

    carrito.forEach(item => {
        const itemElemento = document.createElement("div");
        itemElemento.innerText = `${item.nombre} - $${item.precio}`;
        itemsElemento.appendChild(itemElemento);
        total += item.precio;
    });

    document.getElementById("carrito-total").innerText = `Total: $${total}`;
}

function mostrarCarrito() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("carrito").style.display = "block";
}

function cerrarCarrito() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("carrito").style.display = "none";
}

function vaciarCarrito() {
    carrito = [];
    contador = 0;
    actualizarCarrito();
    cerrarCarrito();
    alert("Carrito vaciado.");
}

function comprar() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
        return;
    }
    alert("¡Gracias por tu compra!");
    vaciarCarrito();
}
