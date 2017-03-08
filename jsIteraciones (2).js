function Mostrar()
{
	var nota;
	var sexo;
	var contador = 0; 
	var promedioNota
	var sumaNotas = 0 
	var notaMin
	var contadorVaronesAprobados = 0

	while (contador < 10)
	{
		nota = prompt("ingrese una nota");
		nota = parseInt(nota)

			while (nota <0 || nota >10)
				{
				
				nota = prompt("ingrese una nota valida");
				nota = parseInt(nota);

					
				}


			if (nota >0 && nota <10)
						{
							sumaNotas=sumaNotas+nota
						}	



		sexo =prompt("ingrese un sexo");
			while (sexo != "m" && sexo != "f")
				{
					sexo = prompt("intrese un sexo valido");
				}


			if (contador != 0)
				{
					notaMin = nota;
				}
				else 
				{
					if (nota < notaMin)
					{
						notaMin == nota;
					}	
				}

			if (nota >= 6)
				{
					sexo = "m"
					contadorVaronesAprobados++
				}

		contador++
	}
	promedioNota = sumaNotas / contador;
	alert(promedioNota)
	alert(contadorVaronesAprobados)
	alert(notaMin)


}//FIN DE LA FUNCIÓN