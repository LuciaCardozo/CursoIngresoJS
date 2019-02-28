function mostrar()
{

	var numero;
	var sumaNegativo=0;
	var sumaPositivo=0;
	var cantidadNegativo=0;
	var cantidadPositivo=0;
	var cantidadCero=0;
	var cantidadPares=0;
	var promedioPositivo=0;
	var promedioNegativo=0;
	var diferencia=0;
	var contador=0;
	var respuesta="si";
	var bandera;
	bandera="es la primera";
	
	while(respuesta=="si")
	{	
		contador++;
		numero=prompt("Ingrese un numero "+contador+" #:");	
		numero=parseInt(numero);

		respuesta=prompt("=>si, para continuar");

	}
		if (numero>0)
		{
			sumaPositivo=sumaPositivo+numero;
			cantidadPositivo++;
		}
		else if (numero<0)
		{
			cantidadNegativo++;
			sumaNegativo=sumaNegativo+numero;
		}
		else if(numero==0)
			{
				cantidadCero++;
			}
		else if (numero%2) 
		{
			cantidadPares++;
		}
		document.write("Suma de positivos "+sumaPositivo+"<br>");

	
	




}//FIN DE LA FUNCIÓN