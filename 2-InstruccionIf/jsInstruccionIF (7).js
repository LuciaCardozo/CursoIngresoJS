function mostrar()
{
//tomo la edad  

	var edad;
	var estadoCivil;
	edad = document.getElementById('edad').value;
	estadoCivil = document.getElementById('estadoCivil').value;
	edad = parseInt(edad);
	if (edad<=17 && estadoCivil!="Soltero") 
	{
		alert("Es muy pequeño para no ser soltero");
	}



}//FIN DE LA FUNCIÓN