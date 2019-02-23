function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';

while(respuesta=='si')
	{
		contador=contador+1;
		numero=prompt("Ingrese el numero " +contador+"# : ");
		numero=parseInt(numero);
		acumulador=acumulador+ numero;

		respuesta=prompt(" =>si, para continuar")
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN