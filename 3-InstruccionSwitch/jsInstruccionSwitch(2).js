function mostrar()
{
//tomo la edad  
var mesDelAño;
mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
	{
		case "Enero":
		case "Febrero":
		case "Diciembre":
		case "Noviembre":
		case "Octubre":
		case "Septiembre":
		alert("Ya pasamos el frio, ahora calor!!!");
		break;

		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
		alert("Falta para el invierno!!!");
		break;

		case "Julio":
		case "Agosto":
		alert("Abrigate que hace frio!!!");
		break;
	}


}//FIN DE LA FUNCIÓN