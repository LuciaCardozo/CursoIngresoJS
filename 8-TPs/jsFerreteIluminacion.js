/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	 var precioLamparas; //declaro las variables
 	 var cantidad;
 	 var descuento;
 	 var precioConDescuento;
 	 var precioFinal;
 	 var ingresosBrutos;
 	 var marca;
 	 var precioDeCompra;
 	 var aumento;

 	 cantidad = document.getElementById('Cantidad').value;//declaro el valor del campo ID y le asigno la variable.(salida)
 	 marca = document.getElementById('Marca').value;
 	 //precioConDescuento = document.getElementById('precioDescuento').value;

 	 cantidad = parseInt(cantidad);//transformo la variable cantidad en numero
 	 ingresosBrutos = parseInt(ingresosBrutos);
 	 precioLamparas=35; //le asigno a la variable un precio
 	 	if (cantidad>=6) 
 	 	{
 	 		descuento=0.5;
 	 	}
 	 	else if (cantidad==5 && marca=="ArgentinaLuz")
 	 	{
 	 		descuento=0.6;
 	 	}
 	 	else if (cantidad==5 && marca!="ArgentinaLuz")
 	 	{
 	 		descuento=0.7;
 	 	}
 	 	else if (cantidad==4 && marca=="ArgentinaLuz" || marca=="FelipeLamparas")
 	 	{
 	 		descuento=0.75;
 	 	}
 	 	else if (cantidad==3 && marca=="ArgentinaLuz")
 	 	{
 	 		descuento=0.85;
 	 	}
 	 	else if (cantidad==3 && marca=="FelipeLamparas")
 	 	{
 	 		descuento=0.9;
 	 	}
 	 	else if (cantidad==3 && marca!="ArgentinaLuz" || marca!="FelipeLamparas")
 	 	{
 	 		descuento=0.95;
 	 	}
     precioDeCompra=precioLamparas*cantidad;
 	 precioConDescuento=precioDeCompra*descuento;
 	 document.getElementById('precioDescuento').value=precioConDescuento;
 	 	if (precioConDescuento>=120)
 	 	{
 	 		ingresosBrutos=1.10;
 	 		precioFinal=precioConDescuento*ingresosBrutos;
 	 		aumento=precioConDescuento/10;
 	    	alert("Usted pago "+precioFinal+" de IIBB, siendo "+aumento+" el impuesto que se pago")
 	 	}
 	 



}
