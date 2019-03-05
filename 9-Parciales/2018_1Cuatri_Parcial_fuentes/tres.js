function mostrar()
{
 var precio;
 var descuento;
 var precioFinal;
 var precioConDescuento;
 precio=prompt("Ingrese el precio");
 precio=parseInt(precio);
 descuento=prompt("Ingrese el porcentaje del descuento");
 descuento=parseInt(descuento);
 precioConDescuento=descuento/100*precio;
 precioFinal=precio-precioConDescuento;
 document.getElementById('elPrecioFinal').value=precioFinal;

}
