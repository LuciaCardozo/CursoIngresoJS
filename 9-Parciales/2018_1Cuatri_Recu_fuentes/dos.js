function mostrar()
{
   var importe;
   var descuento;
   var iva;
   var resultado;
   importe = document.getElementById('elNombre').value;
   descuento = document.getElementById('laLocalidad').value;
   importe = parset(importe);
   descuento = parset(descuento);
   iva = parset(iva);
   descuento= importe*0.90;
   resultado=importe*0.90+iva;

   alert ("tu compra es de "+importe+" tenes un descuento del 10% queda en "+descuento+" , mas el iva es "+resultado)
}
