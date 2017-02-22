function Mostrar()
{
	var numero;
	var i; 
	var cantidadDiv=0
	numero = prompt("ingrese numero");
	numero = parseInt(numero);

		for (i = 1; i <=numero; i++)
			{
				if (numero % i == 0)
					{
						document.write (i);
						cantidadDiv++;
					}
			}
	document.write (" son los divisores, entonces la cantidad es: " + cantidadDiv);




}//FIN DE LA FUNCIÓN