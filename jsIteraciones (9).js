function Mostrar()
{

	var contador=0;
	// declarar variables
	var numMax;
	var numMin;
	var respuesta='si';
	var numero;

	while( respuesta =='si')
	{
		numero = prompt ("ingrese un numero");
		numero = parseInt (numero);
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
		
		contador++;
		respuesta = prompt ("Ingresar otro numero? si/no");
	}

	document.getElementById('maximo').value=numMax;
	document.getElementById('minimo').value=numMin;


}//FIN DE LA FUNCIÓN