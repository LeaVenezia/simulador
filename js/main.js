alert ("Bienvenidos a Iller Pasteleria")

do{
    let producto = parseInt(prompt(tortas));
    if (producto === 6) break;
    let cantidad = parseInt(prompt(cantidadSeleccionada));

    addCarrito( producto , cantidad );

    resp = prompt(`Desea agregar mas tortas? S/N`)

}while(resp == "S");

if(carrito > 0){
alert(`Su compra tiene un total de ${carrito}`);
}

alert(`Gracias por su compra`);