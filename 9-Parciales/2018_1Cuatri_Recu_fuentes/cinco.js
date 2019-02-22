function mostrar()
{
var tipoDePago;
var paquetes;
var descuento;
var precioTotal;
paquetes=prompt("Ingrese paquete")
tipoDePago=prompt("Ingrese medio de pago");

switch(tipoDePago)
{
	case "Tarjeta Visa":
	case "Mercado Pago":
	descuento=0.9;
	break;
	case "Paypal":
	switch(paquetes)
	case "Todo Incluido":
	descuento=0.90
	case 
	descuento=0.85;
	break;
	case "Efectivo":
	descuento=0.80;
	break;
	case "Otro medio de pago":
	descuento=0.95;
	break;
}




}
