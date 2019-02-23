function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var numero;
	var promedioPositivo;
	var promedioNegativo;
	var numeroPositivo;
	var numeroNegativo;
	var cantidadPositivo;
	var cantidadNegativo;
	var contadorNegativo;
	var contadorPositivo;
	var contadorDePares;
	var ceros;
	var acumuladorNegativo;
	var acumuladorPositivo;
	var respuesta="si";
	var bandera;
	var diferencia;


	
	contadorPositivo=0;
	cantidadNegativo=0;
	ceros=0;
	contadorDePares=0;
	acumuladorNegativo=0;
	acumuladorPositivo=0;
	bandera="es la primera";

	while(respuesta=="si")
	{
		contador=contador+1;
		numero=prompt("Ingrese el numero " +contador+"# : ");
		numero=parseInt(numero);
		//acumulador=acumulador+ numero;
	if (numeroPositivo>0)
		{
			numeroPositivo=numeroPositivo+numero;
			contadorPositivo=contadorPositivo+1
		}
	if (numeroNegativo<0)
		{
			numeroNegativo=numeroNegativo+numero;
			contadorNegativo=contadorNegativo+1;
		}
		else
		{
			ceros=ceros+1;
		}

	if (numero%2==0)
	{
		contadorDePares+contadorDePares+1;
	}

		
		respuesta=prompt(" =>si, para continuar");
		numeroPositivo*cantidadPositivo;
		numeroNegativo*cantidadNegativo;
	}
	promedioPositivo=numeroPositivo/cantidadPositivo;
	promedioNegativo=numeroNegativo/cantidadNegativo;
	diferencia=numeroPositivo+numeroNegativo;
	document.write("1-suma de los negativos: "+numeroNegativo+"</br")
	
	




}//FIN DE LA FUNCIÓN