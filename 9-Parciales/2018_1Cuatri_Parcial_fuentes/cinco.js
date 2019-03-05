function mostrar()
{
	var planeta;
	planeta=prompt("Ingrese un planeta");
	switch(planeta)
	{
		case "tierra":
		mensaje="Aca vivimos"
		break;
		case "mercurio":
		case "venus":
		mensaje="Aca hace mas calor";
		break;
		case "marte":
		case "jupiter":
		case "saturno":
		case "urano":
		case "neptuno":
		mensaje="Aca hace frio";
		break;
		default: 
		mensaje="Error, no es un planeta";
		break;
	}
	alert(mensaje);
}
