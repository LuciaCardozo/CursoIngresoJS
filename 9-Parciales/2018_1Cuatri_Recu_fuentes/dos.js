function mostrar()
{
   var importe;
   var descuento;
   var importeFinal;
   importe = document.getElementById('elNombre').value;
   importe = parset(importe);
   importeFinal = parseInt(importeFinal);
   descuento = importe*0.90;
   importeFinal = descuento*1.21;

   alert ("tu compra es de "+importe+" tenes un descuento del 10% queda en "+descuento+" , mas el iva es "+importeFinal)
}
