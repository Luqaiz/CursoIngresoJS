/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;
var numeroIngresado
function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 
		//alert(numeroSecreto );
	numeroSecreto = Math.floor((Math.random()*100)+1)
	console.log(numeroSecreto);
	contadorIntentos=(0);
	document.getElementById('intentos').value = contadorIntentos	 
/*se crea el numero secreto random con math.floor entre 1 y 100
luego con console.log lo mostramos en consola para verificar, luego
establezco el contador en 0 y saco el mismo con getelement*/
}

function verificar()
{
	contadorIntentos=contadorIntentos+1
	document.getElementById('intentos').value = contadorIntentos
	
	numeroIngresado = document.getElementById('numero').value 
	numeroIngresado = parseInt(numeroIngresado)

	if(numeroIngresado == numeroSecreto)
	{
		alert ("Ustes es el ganador!!!")
	}
	if (numeroIngresado < numeroSecreto)
	{
		alert ("Todavia te falta")
	}
	if (numeroIngresado > numeroSecreto)
	{
		alert ("Te pasaste")
	}
/* agrego +1 cada vez que intento encontrar el numero, y luego 
con if creo las alertas para ver si el ejercicio se realizo bien*/

}