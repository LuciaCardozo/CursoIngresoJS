function mostrar()
{
 var numeroUno;
 var numeroDos;
 var suma;
 numeroUno=prompt("Ingrese un numero");
 numeroDos=prompt("Ingrese otro numero");
 numeroUno=parseInt(numeroUno);
 numeroDos=parseInt(numeroDos);
 if(numeroUno==numeroDos)
 {
 	mensaje="Los numeros son iguales "+numeroUno+" "+numeroDos;
 }
 else if(numeroUno>numeroDos)
 {
 	suma=numeroUno+numeroDos;
 	mensaje="El primero es mayor y la suma es "+suma;
 }
 if (suma>10)
 {
 	mensaje="la suma es "+suma+" y supero el 10";
 }
 alert(mensaje);
}
