/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
var numerouno
var numerodos
var numerotres

numerouno=document.getElementById('PrecioUno').value
numerodos=document.getElementById('PrecioDos').value
numerotres=document.getElementById('PrecioTres').value

alert (parseInt (numerouno) + parseInt (numerodos) + parseInt (numerotres));

}
function Promedio () 
{
var numerouno
var numerodos
var numerotres

numerouno=document.getElementById('PrecioUno').value
numerodos=document.getElementById('PrecioDos').value
numerotres=document.getElementById('PrecioTres').value

alert (parseInt (numerouno) % parseInt (numerodos) % parseInt (numerotres));
	
}
function PrecioFinal () 
{
var numerouno
var numerodos
var numerotres

numerouno=document.getElementById('PrecioUno').value
numerodos=document.getElementById('PrecioDos').value
numerotres=document.getElementById('PrecioTres').value

alert (parseInt (numerouno) + parseInt (numerodos) + parseInt (numerotres) * 0.75
	
}