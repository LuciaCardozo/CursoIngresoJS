function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroRandom;
	numeroRandom = Math.floor(Math.random()*10+1);
	if (numeroRandom==9 || numeroRandom==10)
		{
			alert("Excelente");
		}	
		else if (numeroRandom>=4 && numeroRandom<=8)
		{
			alert("aprobo");
		}
		else 
		{
			alert("Vamos, la proxima se puede");
		}
		console.log(numeroRandom);
}//FIN DE LA FUNCIÓN
