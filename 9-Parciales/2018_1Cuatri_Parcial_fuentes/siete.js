function mostrar()
{
 var nota;
 var sexo;
 var contador;
 var promedio;
 var notaBaja;
 var


 contador=0;
 while(contado<5)
 {
 	contador=contador+1;
 	nota=parseInt(nota);
 	nota=prompt("Ingrese su nota del 0 al 10: ");
 	
 	while(nota<0 || nota>10)
 		{
 			nota=prompt("Error, Ingrese su nota del 0 al 10");
 		}
 	sexo=prompt("Ingrese su sexo con f o m: ");
 	while(sexo!="f" && sexo!="m")
 		{
 			sexo=prompt("Error, Ingrese su sexo con f o m");
 		}
 		if(contador==1)
 		{
 			notaBaja=nota;
 		}

 	

 	




 }
}
