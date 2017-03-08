function Mostrar()
{
	var numero;
	var respuesta = "si"; 
	var contador = 0;
	var cantidadPar = 0;
	var sumaNumeros = 0;
	var promedio;
	var numMax 
	var nunMix

	while (respuesta != "no")
		{
			numero =prompt("ingresar un numero");
			numero =parseInt(numero);

			while (numero < 0)
				{
					numero =prompt("ingresar un numero positivo");
					numero =parseInt(numero);
				}

				if (numero > 0)
				{	
					sumaNumeros = sumaNumeros + numero;
				}

				if (numero%2 == 0)
				{
					cantidadPar++;
				}

				if (contador == 0)

				{
					numMax = numero;
					numMin = numero;
				}
				else 
					{
						if (numero < numMin)
							numMin = numero;
						if (numero > numMax)
							numMax = numero;
					}



			respuesta= prompt ("ingresar otro numero? Si o no?");
			contador++;
		}

		promedio = sumaNumeros / contador;

		alert (cantidadPar);
		alert (sumaNumeros);
		alert (promedio);
		alert (numMax);
		alert (numMin);
}//FIN DE LA FUNCIÓN
