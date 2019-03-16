/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombre;
	nombre=document.getElementById('elNombre').value;
	nombre=prompt("Ingrese su nombre");
	alert(nombre);
}


