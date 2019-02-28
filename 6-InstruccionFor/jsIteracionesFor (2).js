function mostrar()
{
	var numeroIngresado;
		var numeroAnterior;

		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		numeroAnterior=parseInt(numeroAnterior);

		for(numeroAnterior=numeroIngresado-1;numeroAnterior<0;numeroAnterior++)
		{
			if(numeroIngresado%numeroAnterior==0)
		 	{
		 		break;
		 	}
			console.log(numeroAnterior);
		}
		if(numeroAnterior==0)
		{
			console.log("Es perfecto");
		}
		else
		{
			console.log("No es perfecto");
		}



}