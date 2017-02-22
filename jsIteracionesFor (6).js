function Mostrar()
{
	var numero;
	var i; 
	var cantidadPar=0
	numero = prompt("ingrese numero");
	numero = parseInt(numero);

		for (i = 1; i <=numero; i++)
			{
				if (i % 2 == 0)
					{
						document.write (i);
						cantidadPar++;
					}
			}
	document.write (" son los numeros par, entonces la cantidad es: " + cantidadPar);
}//FIN DE LA FUNCIÓN