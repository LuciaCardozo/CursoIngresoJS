function mostrar()
{
//tomo la edad  
 var edad;
 edad = document.getElementById('edad').value;
 edad = parseInt(edad);
 if (edad>=18 && edad<=115)
  {
    alert("Sos mayor de edad");
  }
  else if (edad>=13 && edad<=17)
  {
    alert("Sos adolescente");
  }
  else if (edad>=0 && edad<=12)
  {
    alert("Sos menor de edad");
  }
 

}//FIN DE LA FUNCIÓN