function Mostrar()
{
//tomo la edad  
var edad 

edad=document.getElementById('edad').value
edad=parseInt(edad);
if(edad < 13 || edad > 17)
{
	alert ("NO es adolescente")
}
/* la otra manera es negar el if 
if (!(edad > 13 && edad < 17))
{
	alert ("NO adolescente")
}

le agrego el "!"
*/

}//FIN DE LA FUNCIÓN