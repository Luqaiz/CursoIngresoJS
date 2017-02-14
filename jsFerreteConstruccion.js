/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var largoTerreno
var anchoTerreno
var perimetroTerreno

largoTerreno = document.getElementById('Largo').value
anchoTerreno = document.getElementById('Ancho').value

largoTerreno = parseInt(largoTerreno);
anchoTerreno = parseInt(anchoTerreno);

perimetroTerreno = 2*(largoTerreno+anchoTerreno)

perimetroTerreno = 3*perimetroTerreno

alert (perimetroTerreno)
}
/*buscar perimetro de rectangulo, es iguala 2 x (base + altura)
y como se necesita un alambre de tres hilos se multiplica por 3
el perimetro calculado */

function Circulo () 
{
var radioTerreno

radioTerreno = document.getElementById('Radio').value

radioTerreno = (2*Math.PI*radioTerreno)*3

alert (radioTerreno)
	
}
/*buscar el radio de un ciruculo, es igual a 2*numeropi*laradio
y como se necesita un alambre de tres hilos se multiplica por 3*/
function Materiales () 
{
var largoTerreno
var anchoTerreno
var superficieTerreno
var cemente
var cal

largoTerreno = document.getElementById('Largo').value
anchoTerreno = document.getElementById('Ancho').value

superficieTerreno = largoTerreno*anchoTerreno;

//calcular cemento y cal
cemento = superficieTerreno*2
cal = superficieTerreno*3

alert ("Para "+superficieTerreno+"m2, se necesitan: "+cemento+" bolsas de cemento. Y de cal "+cal+" bolsas.");
/*para hayar cuantas bolsas se necesitan hay que hayar la superficie
que es largo * ancho, entonces como se necesitan 2 bolsas de cemento y
3 de cal se multiplican por la superficie, es decir por el resultado final*/
}