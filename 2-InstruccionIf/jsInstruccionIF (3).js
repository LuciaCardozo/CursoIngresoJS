function mostrar()
{
//tomo la edad  
 var edad;
 edad = document.getElementById('edad').value;
 edad = parseInt(edad);
 if (edad>=18)
 {
 	alert("Usted es mayor de edad");
 }
 else if (edad<=17)
 {
 	alert("Sos menor de edad");
 }

}//FIN DE LA FUNCIÓN