function mostrar()
{
 var nota;
 var sexo;
 var contador=0;
 var promedio;
 var notaBaja;
 var notaAlta;
 var sexoAlto;
 var sexoBajo;
 var cantidadDeVarones=0;
 var sumaNota=0;

 while(contador<5)
 {
 	nota=prompt("Ingrese su nota del 0 al 10: ");
 	nota=parseInt(nota);
 	{
 		while(nota<0 || nota>10)
 			{
 				nota=prompt("Error, Ingrese su nota del 0 al 10");
 			}
 		if(nota>0)
 			{
 				sumaNota=sumaNota+nota;
 			}
 	sexo=prompt("Ingrese su sexo con f o m: ");
 	while(sexo!="f" && sexo!="m")
 		{
 			sexo=prompt("Error, Ingrese su sexo con f o m");
 		}
 		if(contador==0)
 			{
 				notaBaja=nota;
 				sexoBajo=sexo;
 				notaAlta=nota;
 				sexoAlto=sexo
 			}
 		else if(nota<notaBaja)
 			{
 				notaBaja=nota;
 				sexoBajo=sexo;
 			}
 			
 		if(sexo=="m" || sexo=="M")
 			{
 				cantidadDeVarones++;
 			}
 			else if (nota>=6 && nota<=10)
 				{
 					notaAlta=nota;
 				}
 		contador++;
 	}
 }
 promedio=sumaNota/contador;

 document.write("El promedio es "+promedio+"</br>"+
 				"La nota mas baja es "+notaBaja+" y el sexo es "+sexoBajo+"</br>"+
 				"La cantidad de varones es "+cantidadDeVarones+" con nota igual o mas de 6. </br>");
}
