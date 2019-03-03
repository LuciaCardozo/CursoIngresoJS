function mostrar()
{
	var numero;
	var letra;
	var cantidadPares=0;
	var cantidadImpares=0;
	var cantidadCero=0;
	var cantidadPositivos=0;
	var cantidadNegativos=0;
	var sumaPositivo=0;
	var sumaNegativo=0;
	var promedio;
	var numeroMaximo=0;
	var letraMaxima;
	var numeroMinimo=0;
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
		numero=parseInt(numero);

		while(numero<-100 || numero>100)
			{
				numero=prompt("Error, ingrese un numero del -100 al 100");
			}		

		respuesta=prompt("=>si, para continuar");

			if (contador==0) 
				{
					numeroMaximo=numero;
					letraMaxima=letra;
					numeroMinimo=numero;
					letraMinimo=numero;
				}
			else if(numero>numeroMaximo)
				{
					numeroMaximo=numero;
					letraMaxima=letra;
				}
			else if(numero<numeroMinimo)
				{
					numeroMinimo=numero;
					letraMinimo=letra;
				}
			if(numero%2==0)
				{
					cantidadPares++;
				}
			else
				{
					cantidadImpares++;
				}
			if(numero==0)
				{
					cantidadCero++;
				}
			if(numero>0)
				{
					sumaPositivo=sumaPositivo+numero;
					cantidadPositivos++;
				}
			if (numero<0) 
				{
					sumaNegativo=sumaNegativo+numero;
					cantidadNegativos++;
				}
			contador++;
			
	}
	promedio=sumaPositivo/cantidadPositivos;
	document.write("La cantidad numeros pares "+cantidadPares+"</br>"+
				   "La cantidad numeros impares "+cantidadImpares+"</br>"+
				   "La cantidad de ceros "+cantidadCero+"</br>"+
				   "Promedio positivo "+promedio+"</br>"+
				   "Suma de negativo "+sumaNegativo+"</br>"+
				   "La letra y el numero maximo es "+letraMaxima+" "+numeroMaximo+"</br>"+
				   "La letra y el numero minimo es "+letraMinimo+" "+numeroMinimo+"</br>");

}
