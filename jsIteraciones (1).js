function Mostrar()
{
	var numero;
	var contador = 0; 
	var numMax
	var numMin


		while (contador < 24)
		{
			numero =prompt("ingrese un importe");
			numero =parseInt(numero)
				while (numero < 0)
				{
					numero =prompt("ingrese un importe positivo");
					numero =parseInt(numero)
				}

			if (contador == 0) 
			{
				numMax = numero;
				numMin = numero;
			}
			else 
			{
				if (numero < numMax);
					numMix = numero;

				if (numero > numMax);
					numMax = numero;
			}

			contador++

		}

	alert ("el numero minimo es" + numMin)
	alert ("el numero maximo es" + numMax)


}//FIN DE LA FUNCIÓN