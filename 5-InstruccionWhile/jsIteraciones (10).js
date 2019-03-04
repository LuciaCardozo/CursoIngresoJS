function mostrar()
{

	var numero;
	var sumaNegativo=0;
	var sumaPositivo=0;
	var cantidadPositivo=0;
	var cantidadNegativo=0;
	var cantidadCeros=0;
	var cantidadPares=0;
	var contador=0;
	var promedioPositivo;
	var promedioNegativo;
	var diferencia;
	var respuesta="si";

	while(respuesta=="si")
	{
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);

		if (numero>0)
			{
				sumaPositivo=sumaPositivo+numero;
				cantidadPositivo++;
			}
		else if (numero<0)
			{
				sumaNegativo=sumaNegativo+numero;
				cantidadNegativo++;
			}
		else if (numero==0)
			{
				cantidadCeros++;
			}
		if(numero%2==0 && numero!=0)
			{
				cantidadPares++;
			}
		respuesta=prompt("=>si, para continuar");
		contador++;

	}
	promedioPositivo=sumaPositivo/cantidadPositivo;
	promedioNegativo=sumaNegativo/cantidadNegativo;
	diferencia=sumaNegativo+sumaPositivo;

	document.write("La suma de los numeros negativo es "+sumaNegativo+"</br>"+
				   "La suma de los numeros positivos es "+sumaPositivo+"</br>"+
				   "La cantidad de numeros positivos es "+cantidadPositivo+"</br>"+
				   "La cantidad de numeros negativos es "+cantidadNegativo+"</br>"+
				   "La cantidad de Ceros es "+cantidadCeros+"</br>"+
				   "La cantidad de numeros pares es"+cantidadPares+"</br>"+
				   "El promedio de numeros positivos es "+promedioPositivo+"</br>"+
				   "El promedio de numeros negativos es "+promedioNegativo+"</br>"+
				   "La diferencia que tienen entre ellos es "+diferencia+"</br>");


}//FIN DE LA FUNCIÓN