function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroRandom 
	numeroRandom = Math.floor((Math.random() * 10) + 1);

	alert (numeroRandom)

	if (numeroRandom >8)
	{
		alert ("EXCELENTE")
	}
	else 
	{
		if (numeroRandom <4)
		{
			alert ("Vamos la proxima se puede")
		}
		else
		{
			alert ("APROBO")
		}
	}
	/*
	ESTO ESTA MAL, NO HACERLO !
	var numeroRandom 
	numeroRandom = Math.floor((Math.random() * 10) + 1);

	alert (numeroRandom)

	if (numeroRandom >8)
	{
		alert ("EXCELENTE")
	}
	if (numeroRandom <4)
	{
		alert (la proxima)
	}
	else 
	{
		alert (APROBO)
	}
	*/

	/* este ejercicio esta bien echo pero se 
	puede ahorrar procesador de otra forma mas
	simple.

	var numeroRandom 
	numeroRandom = Math.floor((Math.random() * 10) + 1);

	alert (numeroRandom)

	if (numeroRandom > 8)
	{

	alert("EXCELENTE")
	}
 	if (numeroRandom > 3 && numeroRandom <9 )
 	{
		alert("APROBÓ")
 	}
	if (numeroRandom < 4)
	{
		alert ("Vamos la proxima se puede")
	}
	*/ 



}//FIN DE LA FUNCIÓN