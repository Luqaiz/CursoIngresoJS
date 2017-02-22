function Mostrar()
{
	//declarar variables 
	var numero 
	var acumuladorPos = 0
	var acumuladorNeg = 0
	var cantidadPos = 0
	var cantidadNeg = 0
	var cantidadCeros = 0
	var cantidadPares = 0 
	var promedioPos 
	var promedioNeg 
	var diferencia
	var respuesta="si";

	//Solicitar numero (while)/continuar //

	while(respuesta!= "no")
		{
			numero = prompt ("ingrese un numero")
			numero = parseInt (numero)

			if (numero > 0)
				{
					acumuladorPos = acumuladorPos + numero
					cantidadPos++
				}

			if (numero < 0)
				{
					acumuladorNeg = acumuladorNeg + numero
					cantidadNeg++
				}

			if (numero == 0)
				{
					cantidadCeros++
				}

			if (numero % 2 == 0 && numero != 0)
				{
					cantidadPares++
				}

			respuesta = prompt ("continuar (si o no)?")			
		}

	promedioPos = acumuladorPos / cantidadPos
	promedioNeg = acumuladorNeg / cantidadNeg
	diferencia = acumuladorPos + acumuladorNeg

	document.write ("La suma de los positivos es: " + acumuladorPos + "</br>");
	document.write ("La suma de los negativos es: " + acumuladorNeg + "</br>");
	document.write ("La cantidad de positivos es: " + cantidadPos + "</br>");
	document.write ("La cantidad de negativos es: " + cantidadNeg + "</br>");
	document.write ("La cantidad de ceros es: " + cantidadCeros + "</br>");
	document.write ("La cantidad de numeros pares es: " + cantidadPares + "</br>");
	document.write ("El promedio de positivos es: " + promedioPos + "</br>");
	document.write ("El promedio de negativos es: " + promedioNeg + "<br>");
	document.write ("La diferencia es: " + diferencia + "</br>");

}//FIN DE LA FUNCIÓN