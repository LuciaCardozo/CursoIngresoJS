function mostrar()
{
//tomo la edad  
   var edad;
   edad = document.getElementById('edad').value;
   edad = parseInt(edad);
   if (edad<=12) 
   {
   	alert("No sos adolescente");
   }
   else
  		{ if (edad>=18) 
  			{
  				alert("No sos adolescente");
  			}

   		}

}//FIN DE LA FUNCIÓN