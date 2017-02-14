/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
var precioUno
var precioDos
var precioTres
var precioTotal

precioUno=document.getElementById('PrecioUno').value
precioDos=document.getElementById('PrecioDos').value
precioTres=document.getElementById('PrecioTres').value

precioUno=parseInt(precioUno);
precioDos=parseInt(precioDos);
precioTres=parseInt(precioTres);

precioTotal = precioUno+precioDos+precioTres;

alert (precioTotal)
}

function Promedio () 
{
var precioUno
var precioDos
var precioTres
var promedioTotal

precioUno=document.getElementById('PrecioUno').value
precioDos=document.getElementById('PrecioDos').value
precioTres=document.getElementById('PrecioTres').value

precioUno=parseInt(precioUno);
precioDos=parseInt(precioDos);
precioTres=parseInt(precioTres);

promedioTotal = (precioUno+precioDos+precioTres)/3;

alert (promedioTotal)
	
}
function PrecioFinal () 
{
var precioUno
var precioDos
var precioTres
var precioFinal

precioUno=document.getElementById('PrecioUno').value
precioDos=document.getElementById('PrecioDos').value
precioTres=document.getElementById('PrecioTres').value

precioUno=parseInt(precioUno);
precioDos=parseInt(precioDos);
precioTres=parseInt(precioTres);

precioFinal = ((precioUno+precioDos+precioTres)*21)/100;
precioFinal = precioFinal+precioUno+precioDos+precioTres

alert (precioFinal)
}
