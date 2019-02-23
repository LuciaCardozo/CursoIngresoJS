function mostrar()
{
	var acumulador;
	var contador;
	var numero;

	contador=0;
	acumulador=0;
	while(contador<5)
	{
		contador=contador+1;
		numero=prompt("Ingrese el numero " +contador+"# : ");
		numero=parseInt(numero);
		acumulador=acumulador+ numero;
	}
	

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN