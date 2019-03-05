function mostrar()
{
	var letra;
	var numero;
	var cantidadPares=0;
	var cantidadImpares=0;
	var cantidadCeros=0;
	var cantidadPositivo=0;
	var promedioPositivo;
	var sumaNegativo=0;
	var sumaPositivo=0;
	var numeroMaximo;
	var numeroMinimo;
	var letraMaximo;
	var letraMinimo;
	var contador=0;
	var respuesta="si";
	while(respuesta=="si")
	{
		letra=prompt("Ingrese una letra");
		while(letra<"a" || letra>"z")
			{
				letra=prompt("Error, ingrese una letra");
			}
		numero=prompt("Ingrese un numero del -100 al 100");
		numero=parseint(numero);
		while(numero<-100 || numero>100)
			{
				numero=prompt("Error, ingrese un numero del -100 al 100");
			}
		if (contador==0)
			{
				numeroMaximo=numero;
				numeroMinimo=numero;
				letraMaximo=letra;
				letraMinimo=letra;
			}
			if (numero<numeroMinimo)
			{
				numeroMinimo=numero;
				letraMinimo=letra;
			}
			else if(numero>numeroMaximo)
			{
				numeroMaximo=numero;
				letraMaximo=letra;
			}
		if(numero%2==0 && numero!=0)
			{
				cantidadPares++;
			}
			else if (numero!%2==0)
				{
				cantidadImpares++;
				}
		if(numero==0)
			{
				cantidadCeros++;
			}
		if(numero>0)
			{	
				sumaPositivo=sumaPositivo+numero;
				cantidadPositivo++;
			}
			else if(numero<0)
				{
					letraMinimo=letra;
					sumaNegativo=sumaNegativo+numero;
				}
		respuesta=prompt("=>si, para continuar");
	}
	promedioPositivo=sumaPositivo/cantidadPositivo;
	document.write("La cantidad de numeros pares es "+cantidadPares+"</br>"+
				   "La cantidad de numeros impares es "+cantidadImpares+"</br>"+
				   "La cantidad de ceros ingresados es "+cantidadCeros+"</br>"+
				   "El promedio de numeros positivos es "+promedioPositivo+"</br>"+
				   "La suma de los numeros negativos es "+sumaNegativo+"</br>"+
				   "El numero maximo y la letra es "+numeroMaximo+" "+letraMaximo+"</br>"+
				   "El numero minimo y la letra es "+numeroMinimo+" "+letraMinimo+"</br>");
}
