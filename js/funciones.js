/* Este archivo contiene las funciones relevantes */

const mostrarProductos = () =>{
    let productos = "Que Torta vas llevar?: \n"
    tortas.forEach((tortas,i)=> productos += i+1 + ".-" + tortas.nombre + "\n")
    productos += (tortas.length + 1) + ".-Salir"
    return parseInt(prompt(productos));
}



const verificarStock = ( cantidad , stock ) =>{
    if(cantidad > stock ){
    alert(`No tenemos suficiente stock, el stock disponible es ${stock}`)
    return false
    }
    else return true;
}


const addCarrito = ( producto, cantidad) =>{
   let found = tortas.find(tortas => tortas.id === producto);
   if(verificarStock(cantidad,found.stock)){
    carrito += (cantidad * found.precio);
    tortas[producto-1].stock-=cantidad;
    alert(`${found.nombre} fue agregado al carrito`)
   }

}

