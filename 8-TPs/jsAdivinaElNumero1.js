/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; //declaro una variable 'numeroSecreto'
var contadorIntentos;//declaro una variable para guardar un contador de intentos.

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 numeroSecreto=Math.floor(Math.random()*100+1);//asigno a la variable 'numeroSecreto' un numero random entre el 1-100
	 contadorIntentos=0;//asigno a la variable 'contadorIntentos' un valor =0(porque aun no tubo intentos.)
	

}

function verificar()
{
	var numeroIngresado;//declaro una variable 'numeroIngresado' 
	
	numeroIngresado=numero.value;//asigno a mi variable 'numeroIngresado' el valor que se encuentra en el ID 'numero'
	contadorIntentos=contadorIntentos+1;//aumento mi contador de intentos en +1;
    intentos.value=contadorIntentos;//asigno al campo con el ID 'intentos' con el valor de la variable 'contadorIntentos'
    

	if (numeroIngresado==numeroSecreto)//verifico si el numero ingrsado es igual al numero secreto
	{ 
		switch(contadorIntentos)//toma los posibles valores de 'contadorIntento' para realizar una accion
	    { 
	    	case 1:
	    	mensaje="que crack";
	    	break;
	    	case 2:
	    	mensaje="bien hecho lo lograste";
	    	break;
	    	case 3:
	    	mensaje="pura suerte";
	    	break;
	    	default:
	    	mensaje=("Bien hecho, lo hiciste en "+contadorIntentos+" intentos");
	    	break;
	    }
	}
	else
	{
       if (numeroIngresado<numeroSecreto) //verica si el numeroingresado es menor que el numerosecreto
       {
       	mensaje=("Falta");
       }

       else //para todos los demas casos le mostramos el siguiente mensaje
       {
       	mensaje=("Te pasaste");
       }
	}
	alert(mensaje);
}