let carrito = [];

export function obtenerCarrito() {
    return carrito;
}

export function agregarAlCarrito(producto) {

    const existe = carrito.find(item => item.id === producto.id);

    if(existe){
        existe.cantidad += 1;
    }else{
        carrito.push({
            ...producto,
            cantidad: 1
        });
    }

}

export function eliminarDelCarrito(id) {

    carrito = carrito.filter(item => item.id !== id);

}

export function vaciarCarrito() {
    carrito = [];
}

export function obtenerTotal(){

    return carrito.reduce(
        (total, item) => total + item.precio * item.cantidad,
        0
    );

}