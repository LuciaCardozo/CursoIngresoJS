function mostrar()
{
 	var marca;
 	var tamaño;
 	var precio;
 	var mayorPrecio=0;
 	var mayorPrecioMarca;
 	var mayorPrecioTamaño;
 	var respuesta="si";
 	var sumaPrecio=0;
 	var acumulador=0;
 	var precioPromedio;
 	var cantidadDeCelulares=0;
 	var menorPrecio=0;
 	var menorPrecioMarca;
 	var menorPrecioTamaño;
 	var contador=0;


 	while(respuesta=="si")
 	{
 		marca=prompt("Ingrese la marca del equipo");
 		tamaño=prompt("Ingrese el tamaño");
 		precio=prompt("Ingrese el precio");

 		tamaño=parseInt(tamaño);
 		precio=parseInt(precio);
 		while(tamaño<2)
 		{
 			tamaño=prompt("Error, ingrese el tamaño");
 		}
 		while(precio<1000 || precio>50000)
 		{
 			precio=prompt("Error, ingrese el precio");
 		}

 		respuesta=prompt("=>si, para continuar");

 		if(contador==0)
 		{
 			mayorPrecio=precio;
 			mayorPrecioMarca=marca;
 			mayorPrecioTamaño=tamaño;
 			menorPrecio=precio;
 			menorPrecioMarca=marca;
 			menorPrecioTamaño=tamaño;
 		}
 		
 		else if(precio>mayorPrecio)
 		{
 			mayorPrecio=precio;
 			mayorPrecioMarca=marca;
 			mayorPrecioTamaño=tamaño;
 		}
 		else if(precio<menorPrecio)
 		{
 			menorPrecio=precio;
 			menorPrecioMarca=marca;
 			menorPrecioTamaño=tamaño;
 		}
 		
 		if (precio>0)
 		{
 			acumulador++;
 			sumaPrecio=sumaPrecio+precio;
 		}
 		if(precio>2000)
 		{
 			cantidadDeCelulares++;
 		}
 		contador++;
 		
 	}
 	precioPromedio=sumaPrecio/acumulador;
 	document.write ("El precio mayor es "+mayorPrecio+" y la marca es "+mayorPrecioMarca+"</br>"+
 					"El promedio es "+precioPromedio+"</br>"+
 					"Cantidad de celulares que tiene un valor mayor a $2000.-: "+cantidadDeCelulares+"</br>"+
 					"El celular mas caro es "+mayorPrecioMarca+" de "+mayorPrecioTamaño+" pulgadas, con el valor de "+mayorPrecio+"</br>"+
 					"El celular mas barato es "+menorPrecioMarca+" de "+menorPrecioTamaño+ " pulgadas, con el valor de "+menorPrecio+"</br>");
} 