function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	switch (mesDelAño)
	{
		case "Febrero":
		alert ("Tiene 28 días")
		break;

		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
		alert ("Tiene 31 días")
		break;

		default:
		alert ("Tiene 30 días")
		break;
	}
}//FIN DE LA FUNCIÓN