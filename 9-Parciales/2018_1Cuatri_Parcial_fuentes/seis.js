function mostrar()
{
	var hora;
	hora=document.getElementById('laHora').value;
	hora=parseInt(hora);

	if(hora>=6 && hora<=11)
		{
			mensaje="Es de mañana";
		}
	else if(hora>=12 && hora<=19)
		{
			mensaje="Es de tarde";
		}
	else if(hora>=20 && hora<=24)
		{
			mensaje="Es de noche";
		}
	else if(hora>=0 && hora<=5)
		{
			mensaje="Es de noche";
		}
	else
		{
			mensaje="Hora invalida";
		}
	if(hora>=20 && hora<=24)
		{
			mensaje="A dormir";
		}
	
	alert(mensaje)
}
