function mostrar()
{
	var marca;
	var tamaño;//numero
	var precio;//numero
	var respuesta="si";
	var contador=0;
	var mayorPrecio;
	var mayorPrecioMarca;
	var acumulador=0;
	var precioPromedio;
	//1-sacar el mayor precio y la marca
	while(respuesta=="si")
	{
		marca=prompt("Ingrese una marca de celular");
		tamaño=prompt("Ingrese el tamaño");
		precio=prompt("Ingrese el precio");
		acumulador=acumulador+precio;
		acumulador=acumulador+marca;

		tamaño=parseInt(tamaño);
		precio=parseInt(precio);

		respuesta=prompt("=>si, para continuar");

		if(contador==0)
		{
			mayorPrecio=precio;
			mayorPrecioMarca=marca;
			precioPromedio=precioPromedio+precio;
			precioPromedio=acumulador/contador;
		}
		else if (precio>mayorPrecio)
		{
			mayorPrecio=precio;
			mayorPrecioMarca=marca;
		}
		contador++;


		
	 }
	document.write("El precio mayor es "+mayorPrecio+" de la marca "+mayorPrecioMarca+"</br>"
				   "El precio promedio es "+precioPromedio+"</br>");
}
