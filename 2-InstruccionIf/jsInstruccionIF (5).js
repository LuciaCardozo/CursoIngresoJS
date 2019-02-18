function mostrar()
{
//tomo la edad  
   var edad;
   edad = document.getElementById('edad').value;
   edad = parseInt(edad);
   if (edad<=12 || edad>=18)
      {
        alert("NO sos adolescente");
      }

}//FIN DE LA FUNCIÓN