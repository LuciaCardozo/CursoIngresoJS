function mostrar()
{
	var hora;
	hora=document.getElementById('laHora').value;
	hora=parseInt(hora);
	switch(hora)
	{
		case 0:
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
		case 20:
		case 21:
		case 22:
		case 23:
		case 24:
		if(hora<0 || hora>23)
			{
				mensaje="Error, la hora no es valida";
				break;
			}
		if(hora>=6 && hora<=11)
			{
				mensaje="Es de mañana";
				break;
			}
		else if(hora>=12 && hora<=19)
			{
				mensaje="Es de tarde";
				break;
			}
		else
			{
				mensaje="Es de noche";
			}

		if(hora>19 && hora<24)
			{
				mensaje="A dormir";
				break;
			}
		
	}
	
	alert(mensaje)
}
