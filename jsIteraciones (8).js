function Mostrar()
{

	var contador=0;
	var respuesta='si';
	var numero;
	var acumuladorPos = 0;
	var acumuladorNeg = 1;

		while (respuesta == "si")
		{
			numero = prompt ("ingresar numero");
			numero = parseInt (numero)

			while (numero < -10 || numero >10)
			{
				numero = prompt ("ERROR , ingresar numero");
				numero = parseInt (numero);
			}
			if (numero<0)
			{
				acumuladorNeg = acumuladorNeg * numero;
			}
		
			else 
			{
				acumuladorPos = acumuladorPos + numero;
			}
			
			contador++
			respuesta = prompt ("ingresar otro numero? si/no"); 
		}
/* se necesita un acumulador para acumuladorPoss "acumPos = 0" 
y otro para negativos "acumNeg = 1" ya que si lo
igualo a 0 se multiplicaria por 0*/
 
document.getElementById('suma').value=acumuladorPos;
document.getElementById('producto').value=acumuladorNeg 

}//FIN DE LA FUNCIÓN