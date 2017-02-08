function Mostrar()
{
//tomo la edad  
var edad
var estadocivil

edad = document.getElementById('edad').value

	edad = parseInt(edad);

		estadocivil = document.getElementById('estadoCivil').value

if (edad <=17 && estadocivil != ("Soltero"));
{

	document.write ("es pequeño para no ser soltero")
}

}//FIN DE LA FUNCIÓN