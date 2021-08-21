/* Este archivo contiene las funciones relevantes */



const verificarStock = ( cantidad , stock ) =>{
    if(cantidad > stock ){
    alert(`No tenemos suficiente stock, el stock disponible es ${stock}`)
    return false
    }
    else return true;
}


const addCarrito = ( producto , cantidad ) =>{
    switch(producto) {
        case 1:
            if (verificarStock(cantidad, stockChocotorta)){
                carrito += (cantidad * priceChocotorta);
                stockChocotorta -= cantidad;
                alert(`Torta agregada al carrito`)
            }
        break;
            
        case 2:
            if (verificarStock(cantidad, stockLemonPie)){
                carrito += (cantidad * priceLemonPie);
                stockLemonPie -= cantidad;
                alert(`Torta agregada al carrito`)
            }
        break;
        
        case 3:
            if (verificarStock(cantidad, stockBrownie)){
                carrito += (cantidad * priceBrownie);
                stockBrownie -= cantidad;
                alert(`Torta agregada al carrito`)
            }
        break;
                
        case 4:
            if (verificarStock(cantidad, stockCheesecake)){
                carrito += (cantidad * priceCheesecake);
                stockCheesecake -= cantidad;
                alert(`Torta agregada al carrito`)
            }
        break;

        case 5:
            if (verificarStock(cantidad, stockPastaFrola)){
                carrito += (cantidad * pricePastaFrola);
                stockPastaFrola -= cantidad;
                alert(`Torta agregada al carrito`)
            }
        break;

        default:
            alert(`Producto no encontrado`)

    }
}