function Mostrar()
{
/* se ingresara los datos de los alumnos del curso de
ingreso, a partir de estos datos deberemos informar 
lo siguiente :
1- La mejor nota
2- Promedio de notas
3- Necesito saber la cantidad de mujeres aprobadas
mayores a 25 años
4- El sexo y el nombre de la ultima persona que se 
sacó 10 
5- La cantidad de hombres desaprobados 
6- La cantidad de mujeres deaprobadas 
7- El promedio de nota de las mujeres
8- El promedio de nota de los hombres mayores a 30
9- ¿Que sexo desaprobó más?
10- ¿Cuantas personas menores a 30 años desaprobaron el examen?
Los datos de los alumnos son Nombre, Edad, Nota y Sexo
*/
var nombre;
var edad; 
var nota;
var notaMas;
var notaMuj;
var sexo;
var notaMax;
var promedioNota
var sexoUltDiez = "indefinido"
var nombreUltDiez = "alguien"
var contadorNotaMuj = 0
var contadorNotaMas = 0
var contadorHomDesap = 0
var contadorMujDesap = 0
var contadorMujAprob = 0 
var promedioNotaMujeres
var promedioNotaMas

var sumaNotas = 0
var respuesta = "si"; 
var contador = 0 

while (respuesta != "no")
	{
		nombre=prompt ("ingrese nombre");
		edad=prompt ("ingrese edad");
		edad=parseInt (edad);
			while (edad < 18 || nota > 100)
				{
					edad=prompt ("ingrese edad");
					edad=parseInt (edad);
				}

		nota=prompt("ingrese nota");
		nota=parseInt(nota);
			while (nota < 0 || nota > 10)
			{
				nota=prompt("ingrese nota");
				nota=parseInt(nota)
				if(nota >0 && nota <10)
				{
					sumaNotas=sumaNotas+nota
					contador++
				}
				
			}
		
		sexo=prompt("ingrese sexo");

			while (sexo != "masculino" && sexo != "femenino")
			{
				sexo=prompt("ingrese sexo valido")

				if(sexo == femenino)
				{
					sexo=femenino
				}

				else 
				{
					sexo=masculino
				}
			}

		if (edad >25 && sexo=="femenino")
			{
				contadorMujAprob++;
			}
		if (contador == 0)
			{
				notaMax = nota;
			}
			else 
			{
				if (nota > notaMax)
				{
					notaMax = nota;
				}
			}
		if (nota<4)
			{
				sexo = masculino;
				contadorHomDesap++;
			}
		if (nota<4)
			{
				sexo = femenino;
				contadorMujDesap++;
			}

		if (sexo = femenino)
			{
				nota = notaMuj + nota
				contadorNotaMuj++
			}

		if (sexo = masculino)
			{
				nota = notaMas + nota
				contadorNotaMas++
			}






		if (nombre =! "alguien")
			{
				nota = 10
				nombre = nombreUltDiez
				alert (nombreUltDiez)

				if (sexo == "masculino" || sexo == "femenino")
				{	
					nota = 10
					sexo = sexoUltDiez
					alert (sexoUltDiez)
				}
			}

		

		respuesta = prompt ("desea continuar? si/no")
		contador++
	}

	promedioNota = sumaNotas / contador
	promedioNotaMujeres = notaMuj / contadorNotaMuj
	promedioNotaMas = notaMas / contadorNotaMas

}//FIN DE LA FUNCIÓN