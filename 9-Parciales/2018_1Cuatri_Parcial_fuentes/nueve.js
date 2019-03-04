function mostrar()
{

 var marcaDelProducto;
 var peso;
 var pesoMaximo=0;
 var pesoMinimo=0;
 var marcaMaximo;
 var temperatura;
 var cantidadProductos=0;
 var temperaturaBaja;
 var sumaPeso=0;
 var respuesta="si";
 var cantidadTemperaturaPares=0;
 var contador=0;

 while (respuesta=="si")
 {
 	marcaDelProducto=prompt("Ingrese la marca del producto");
 	peso=prompt("Ingrese su peso (entre 1 y 100)");
 	peso=parseInt(peso);
 	
 	while (peso<1 || peso>100)
 		{
 			peso=prompt("Error, ingrese su peso (entre 1 y 100)");
 		}
 	temperatura=prompt("Ingrese la temperatura de almacenamiento (entre -30 y 30)");
 	temperatura=parseInt(temperatura);
 	while (temperatura<-30 || temperatura>30)
 		{
 			temperatura=prompt("Error, ingrese la temperatura de almacenamiento(entre -30 y 30)");
 		}
 	if (temperatura%2==0 && temperatura!=0)
 		{
 			cantidadTemperaturaPares++;
 		}
 	if (temperatura<0)
 		{
 			cantidadProductos++;
 		}
 	if (contador==0)
 		{
 			pesoMaximo=peso;
 			marcaMaximo=marcaDelProducto;
 			pesoMinimo=peso;
 		}
 	else if (peso>pesoMaximo)
 		{
 			pesoMaximo=peso;
 			marcaMaximo=marcaDelProducto;
 		}
 	else if (peso<pesoMinimo)
 		{
 			pesoMinimo=peso;
 		}
 	if (peso>0 && peso<100)
 		{
 			sumaPeso=sumaPeso+peso;
 		}

 	respuesta=prompt("=>si, para continuar");
 	contador++;
 }
 promedio=sumaPeso/contador;
 document.write("La cantidad de temperatura pares "+cantidadTemperaturaPares+"</br>"+
 				"La marca del producto mas pesado es "+marcaMaximo+"</br>"+
 				"La cantidad de productos que se conservan a menos de 0 grados "+cantidadProductos+"</br>"+
 				"El promedio del peso de todos los productos "+promedio+"</br>"+
 				"El peso maximo es "+pesoMaximo+" y peso minimo es "+pesoMinimo+"</br>");

}
