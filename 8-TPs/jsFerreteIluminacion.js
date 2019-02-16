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
 	var precioLampara; //declaro las variables
 	var cantidad;
 	var marca;
 	var descuento;
 	var precioConDescuento;
 	var precioDeCompra;

 	cantidad=Cantidad.value;//asigno a la variable cantidad el valor que esta en el campo con el ID "cantidad"
 	marca=Marca.value;
 	cantidad=parseInt(cantidad);//transformo el valor de la variable en un numero
 	precioLampara=35;//asigno a la variable precioLampara el valor de $35 
 	if (cantidad>=6)//verifico si la cantidad es mayor o igual a 6
 	{   
 		descuento=0.5; //le asigno un porcetaje a la variable descuento	
 	}
 	else
 	{
 		if(cantidad==5 && marca=="ArgentinaLuz")
 		{
 			descuento=0.6;
 		}
 		else if(cantidad==5 && marca!="ArgentinaLuz")
 		{
 			descuento=0.7;
 		}
 		else if (cantidad==4 && marca=="ArgentinaLuz" || marca=="FelipeLamparas")
 		{
 			descuento=0.75;
 		}
 		else if (cantidad==4 && marca!="ArgentinaLuz" && marca!="FelipeLamparas") 
 		{
 			descuento=0.8;
 		}
 		else if (cantidad==3 && marca=="ArgentinaLuz")
 		{
 			descuento=0.85;
 		}
 		else if (cantidad==3 && marca=="FelipeLamparas")
 		{
 			descuento=0.90;
 		}
 		else if (cantidad==3 && marca!="ArgentinaLuz" && marca!="FelipeLamparas")
 		{
 			descuento=0.95;
 		}


 		
 	}
  	precioDeCompra=cantidad*precioLampara;//
 	precioConDescuento=precioDeCompra*descuento;//asigno la variable precioConDescuento el resultado de precioLampara *(por) el descuento
    precioDescuento.value=precioConDescuento;//asigno en el campo con el ID precioDescuento el valor de la variable precioConDescuento
 		
}
