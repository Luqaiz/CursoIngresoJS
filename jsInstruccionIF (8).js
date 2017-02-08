function Mostrar()
{
//tomo la edad  
var edad
var estadocivil

edad = document.getElementById('edad').value

	edad = parseInt(edad);

		estadocivil = document.getElementById('estadoCivil').value

if (edad > 17 && estadoCivil == "Soltero")
{
	alert ("es soltero y no es menor");
}

	


}//FIN DE LA FUNCIÓN