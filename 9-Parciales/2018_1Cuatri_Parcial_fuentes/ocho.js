function mostrar()
{
	var numero;
	var letra;
	var cantidadPares=0;
	var cantidadImpares=0;
	var cantidadCeros=0;
	var sumaPositivos=0;
	var sumaNegativos=0;
	var cantidadPositivos=0;
	var promedio;
	var numeroMaximo;
	var numeroMinimo;
	var letraMaxima;
	var letraMinima;
	var respuesta="si";
	var contador=0;
	while(respuesta=="si")
	{
		letra=prompt("Ingrese una letra")
		while(letra<"a" || letra>"z" || letra.length>1)
			{
				letra=prompt("Error, ingrese solo UNA letra");
			}
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);
		while(numero<-100 || numero>100)
			{
				numero=prompt("Error, ingrese un numero");
			}
			if(numero%2==0 && numero!=0)
				{
					cantidadPares++;
				}
				else if(numero==0)
					{
						cantidadCeros++;
					}
				else
					{
						cantidadImpares++;
					}
			if(numero>0)
				{
					sumaPositivos=sumaPositivos+numero;
					cantidadPositivos++;
				}
				else if(numero<0)
					{
						sumaNegativos=sumaNegativos+numero;
					}
			if(contador==0)
				{
					letraMinima=letra;
					letraMaxima=letra;
					numeroMaximo=numero;
					numeroMinimo=numero;
				}
				else if(numero>numeroMaximo)
					{
						numeroMaximo=numero;
						letraMaxima=letra;
					}
				else if(numero<numeroMinimo)
					{
						numeroMinimo=numero;
						letraMinima=letra;
					}


	respuesta=prompt("=>si, para continuar");
	contador++;

	}
	promedio=sumaPositivos/cantidadPositivos;
	document.write("La cantidad de numeros pares es: "+cantidadPares+"</br>"+
				   "La cantidad de numeros impares es: "+cantidadImpares+"</br>"+
				   "La cantidad de ceros es: "+cantidadCeros+"</br>"+
				   "El promedio de numeros positivos es: "+promedio+"</br>"+
				   "La suma de numeros negativos es: "+sumaNegativos+"</br>"+
				   "El numero maximo y la letra es: "+numeroMaximo+" "+letraMaxima+"</br>"+
				   "El numero minimo y la letra es: "+numeroMinimo+" "+letraMinima+"</br>");
}
