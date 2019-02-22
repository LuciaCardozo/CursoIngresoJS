function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
	while(numero<=0 || numero>=10)
	{
		numero = prompt("Error, ingrese nuevamente un numero entre 0 y 10");
	}
	alert("Usted ingreso "+numero);


}//FIN DE LA FUNCIÓN