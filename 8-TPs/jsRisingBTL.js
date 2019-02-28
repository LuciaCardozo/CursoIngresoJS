/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
  var edad;
  var sexo;
  var estadoCivil;
  var sueldoBruto;
  var numeroDeLegajo;
  var nacionalidad;


  edad = prompt("Ingrese su edad");
  edad = parseInt(edad);

 		while ((edad<18) || (edad>90))
  		{
	  		edad=prompt("Error, ingrese su edad");
  		}

  			sexo = prompt("Ingrese su sexo con f o m");
  	
  			while  ((sexo!="f") && (sexo!="m") && (sexo!="F") && (sexo!="M"))
  			{
  				sexo=prompt("Error,ingrese su sexo con f o m");
  			}
  				if ((sexo=="f") || (sexo=="F")) 
  				{
  					sexo="Femenino.";
  				}
  				else if ((sexo=="m") || (sexo=="M"))
  				{
  					sexo="Masculino.";
  				}

    		estadoCivil=prompt("Ingrese su estado civil ej:soltero, casado, divorciado o viudo");

  			while ((estadoCivil!="soltero") && (estadoCivil!="casado") && (estadoCivil!="divorciado") && (estadoCivil!="viudo") &&
  				   (estadoCivil!="Soltero") && (estadoCivil!="Casado") && (estadoCivil!="Divorciado") && (estadoCivil!="Viudo"))
  			{
  				estadoCivil=prompt("Error, ingrese su estado civil ej:soltero, casado, divorciado o viudo");
  			}
  				if (estadoCivil=="soltero") 
  				{
  					estadoCivil="Soltero.";
  				}
  				else if (estadoCivil=="casado")
  				{
  					estadoCivil="Casado.";
  				}
  				else if (estadoCivil=="divorciado") 
  				{
  					estadoCivil="Divorciado.";
  				}
  				else if (estadoCivil=="viudo") 
  				{
  					estadoCivil="Viudo.";
  				}


  			sueldoBruto=prompt("Ingrese su sueldo, no menor de 8000");
  			sueldoBruto=parseInt(sueldoBruto);

  			while(sueldoBruto<8000)
  			{
  				sueldoBruto=prompt("Ingrese su sueldo, no menor de 8000");
  			}
  				if(sueldoBruto>8000)
  				{
  					sueldoBruto="$"+sueldoBruto+".-";
  				}

  			numeroDeLegajo=prompt("Ingrese su numero de legajo");
  			numeroDeLegajo=parseInt(numeroDeLegajo);

  			while((numeroDeLegajo<1000) || (numeroDeLegajo>9999))
  			{
  				numeroDeLegajo=prompt("Error,ingrese su numero de legajo");
  			}

  			nacionalidad=prompt("Ingrese su nacionalidad con la letra 'A' para (argentino), 'E' para (extranjero) o 'N' para (nacionalizados)");

  			while((nacionalidad!="a") && (nacionalidad!="e") && (nacionalidad!="A") && (nacionalidad!="E") && (nacionalidad!="n") && (nacionalidad!="N"))
  			{
  				nacionalidad=prompt("Error, ingrese su nacionalidad con la letra 'A' para (argentinos), 'E' para (extranjeros) o 'N' para (nacionalizados)");
  			}
  				if (nacionalidad=="a" || nacionalidad=="A") 
  				{
  					nacionalidad="Argentino.";
  				}
  				else if(nacionalidad=="e" || nacionalidad=="E")
  				{
  					nacionalidad="Extranjero.";
  				}
  				else if (nacionalidad=="n" || nacionalidad=="N") 
  				{
  					nacionalidad="Nacionalizado.";
  				}


  	
  	document.getElementById('Edad').value=edad;
  	document.getElementById('Sexo').value=sexo;
  	document.getElementById('EstadoCivil').value=estadoCivil;
  	document.getElementById('Sueldo').value=sueldoBruto;
  	document.getElementById('Legajo').value=numeroDeLegajo;
  	document.getElementById('Nacionalidad').value=nacionalidad;
 
}
