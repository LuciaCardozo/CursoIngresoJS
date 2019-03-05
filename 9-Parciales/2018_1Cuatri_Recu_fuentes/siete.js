function mostrar()
{
	var nota;
	var sexo;
	var notaBaja;
	var sexoNotaBaja;
	var cantidadDeVarones=0;
	var sumaDeNota=0;
	var promedio;
	var contador=0;
	var respuesta="si";
	while(contador<5)
	{
		nota=prompt("Ingrese su nota");
		nota=parseInt(nota);

		while(nota<0 || nota>10)
			{
				nota=prompt("Error, ingrese su nota");
			}
			sexo=prompt("Ingrese su sexo con la letra 'f' (para femenino) o 'm'(para masculino)");
			while(sexo!="f" && sexo!="F" && sexo!="m" && sexo!="M")
				{
					sexo=prompt("Error, ingrese su sexo");
				}
			if(contador==0)
				{
					notaBaja=nota;
					sexoNotaBaja=sexo;
				}
				else if(nota<notaBaja)
					{
						notaBaja=nota;
						sexoNotaBaja=sexo;
					}
				
			if(nota>=6 && nota<=10)
				 {
				 	if(sexo=="m" || sexo=="M")
				 	{
				 		cantidadDeVarones++;
				 	}
				 }

			if(nota>=0 && nota<=10)
				{
					sumaDeNota=sumaDeNota+nota;
				}
			respuesta=prompt("=>si, para continuar");
			contador++;
	}
	promedio=sumaDeNota/contador;
	alert("El promedio de las notas es "+promedio+". La nota mas baja y el sexo es "+notaBaja+" y es de un "+
		sexoNotaBaja+". La cantidad de varones con notas mayor o igual a 6 son "+cantidadDeVarones);
}
