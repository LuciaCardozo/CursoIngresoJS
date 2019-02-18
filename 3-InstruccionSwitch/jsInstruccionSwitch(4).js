function mostrar()
{
//tomo la edad  
var mesDelAño;
mesDelAño = document.getElementById('mes').value;

switch (mesDelAño)
	{	
		case "Febrero":
		alert("Este mes tiene 28 dias");
		break;

		case "Noviembre":
		case "Septimbre":
		case "Junio":
		case "Abril":
		alert("Este mes tiene 30 dias");
		break;

	    default:
	    alert("Este mes tiene 31 dias");
	}



}//FIN DE LA FUNCIÓN