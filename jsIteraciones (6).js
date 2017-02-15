function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;

		while (contador < 5)
		{
			numero = prompt ("Ingrese numero");
			numero = parseInt (numero);
			acumulador = acumulador + numero; // acumulador+ = numero es lo mismo
			contador = contador + 1; 
		}	

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN