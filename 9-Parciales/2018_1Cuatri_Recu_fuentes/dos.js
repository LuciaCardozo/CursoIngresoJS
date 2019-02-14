function mostrar()
{
   var importe;
   var descuento;
   var iva;
   var importeFinal;
   importe = document.getElementById('elNombre').value;
   descuento = document.getElementById('laLocalidad').value;
   importe = parset(importe);
   descuento = parset(descuento);
   iva = parset(iva);
   importeFinal = parseInt(importeFinal);
   descuento = importe*0.90;
   importeFinal = importe*0.90+iva;

   alert ("tu compra es de "+importe+" tenes un descuento del 10% queda en "+descuento+" , mas el iva es "+importeFinal)
}
