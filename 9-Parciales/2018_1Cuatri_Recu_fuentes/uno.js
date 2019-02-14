
function mostrar()
{
 var nombre1;
 var nombre2
 var peso1;
 var peso2;
 var resultado;
 nombre1 = prompt("Ingrese el nombre de su primer mascota",nombre1);
 peso1 = parsetInt(peso1);
 peso1 =prompt ("Ingrese su peso",peso1);
 nombre2 = prompt ("Ingrese el nombre de su segunda mascota",nombre2);
 peso2=parsetInt(peso2);
 peso2 = prompt ("peso2");
 resultado=peso1+peso2;
 alert("tenes dos mascotas, "+nombre+" y "+nombre+" que pesan "+peso1+" y "+peso2+" ambos pesan "+resultado);
}
