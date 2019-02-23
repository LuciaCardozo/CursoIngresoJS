function mostrar()
{
 	var numero;
	var contador=0;
	var positivo=0;
	var negativo=1;
	var suma;
	
	var respuesta="si";
	while(1)
	{
		contador=contador+1;
		numero=prompt("Ingrese un numero positivo o negativo " +contador+"# : ");
		numero=parseInt(numero);
		//acumulador=acumulador+ numero;

 		if(numero>0)
 		{
 			positivo=positivo+numero;
 			break;
 		}
 		else if(<0)
 		{
 			negativo=negativo*numero;
 			break;
 		}
 		
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN