function mostrar()
{
  var numeroUno;
  var numeroDos;
  var numeroTres;
  var numeroCuatro;
  var descuento;	
  var resultado;
  var resultadoFinal;
  var precioMayor;
  numeroUno = prompt("Ingrese el primer numero");
  numeroDos = prompt("Ingrese el segundo numero");
  numeroTres = prompt("Ingrese el tercer numero");
  numeroCuatro = prompt("Ingrese el cuarto numero");
  numeroUno=parseInt(numeroUno);
  numeroDos=parseInt(numeroDos);
  numeroTres=parseInt(numeroTres);
  numeroCuatro=parseInt(numeroCuatro);


  if(numeroUno>=numeroDos&&numeroUno>=numeroTres&&numeroUno>=numeroCuatro)
  {
  	precioMayor=numeroUno;
  }
  	else if(numeroDos>=numeroUno&&numeroDos>=numeroTres&&numeroDos>=numeroCuatro)
  	{
  		precioMayor=numeroDos;
 	 }
 	 else if(numeroTres>=numeroUno&&numeroTres>=numeroDos&&numeroTres>=numeroCuatro)
  	{
  		precioMayor=numeroTres;
 	 }
  	else if(numeroCuatro>=numeroUno&&numeroCuatro>=numeroDos&&numeroCuatro>=numeroTres)
  	{
  		precioMayor=numeroCuatro;
  	}

  resultado=numeroUno+numeroDos+numeroTres+numeroCuatro;
  if (resultado>100)
  {
  	descuento=0.90;
  }
  else if (resultado>50)
  {
  	descuento=0.95;
  }
  else if (resultado<50)
  {
  	descuento=1.15;
  }
  resultadoFinal=resultado*descuento;
  alert("El resultado es "+resultadoFinal);




}
