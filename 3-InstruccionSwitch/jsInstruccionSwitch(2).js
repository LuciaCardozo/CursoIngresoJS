function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{   
	case "Enero":
 	case "Febrero":
 	case "Septiembre":
	case "Octubre":
	case "Noviembre":
	case "Diciembre":
	mensaje="Ya paso el frio, ahora calor!!!";
	break; 

	case "Julio":
	case "Agosto":
	mensaje="Abrigate hace frio";
	break;
	

	case "Marzo":
	case "Abril":
	case "Mayo":
	case "Junio":
	mensaje="falta para el invierno";
	break;
}
 alert(mensaje);


}//FIN DE LA FUNCIÓN