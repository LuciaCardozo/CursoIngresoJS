function mostrar()
{
	var marcaDelProducto;
	var temperatura;
	var peso;
	var marcaMaxima;
	var pesoMaximo;
	var pesoMinimo;
	var promedio;
	var cantidadProducto=0;
	var cantidadTemperaturaPares=0;
	var contador=0;
	var sumaProductos=0;
	var respuesta="si";
	while(respuesta=="si")
	{
		marcaDelProducto=prompt("Ingrese la marca del producto");
		peso=prompt("Ingrese el peso del 1 al 100");
		peso=parseInt(peso);
		while(peso<1 || peso>100)
			{
				peso=prompt("Error, ingrese el peso del 1 al 100");
			}
		temperatura=prompt("Ingrese la temperatura del -30 al 30");
		temperatura=parseInt(temperatura);
		while(temperatura<-30 || temperatura>30)
			{
				temperatura=prompt("Error, ingrese la temperatura del -30 al 30");
			}
		if(temperatura%2==0 && temperatura!=0)
			{
				cantidadTemperaturaPares++;
			}
		if(contador==0)
			{
				marcaMaxima=marcaDelProducto;
				pesoMaximo=peso;
				pesoMinimo=peso;
			}
		else if(peso>pesoMaximo)
			{
				pesoMaximo=peso;
			}
		else if (peso<pesoMinimo)
			{
				marcaMinimo=marcaDelProducto;
				pesoMinimo=peso;
			}
		if(temperatura<0)
			{
				cantidadProducto++;
			}
		if(peso>0)
			{
				sumaProductos=sumaProductos+peso;
			}
		contador++;
		respuesta=prompt("=>si, para continuar");
	}
	promedio=sumaProductos/contador;
	document.write("La cantidad de temperatura pares es: "+cantidadTemperaturaPares+"</br>"+
				   "La marca del producto mas pesado es: "+marcaMaxima+"</br>"+
				   "La cantidad de productos que se conservan a menos de 0 grados es: "+cantidadProducto+"</br>"+
				   "El promedio del peso de todos los productos: "+promedio+"</br>"+
				   "El peso maximo es: "+pesoMaximo+"</br>"+
				   "El peso minimo es: "+pesoMinimo+"</br>");
}
