function Mostrar()
{
//tomo la edad 
var edad 

edad=document.getElementById('edad').value
edad=parseInt(edad);

if (edad > 17) {
	alert ("es mayor")
}

else {
	if (edad < 13){
		alert ("es niño")
	}
	else {
		alert ("es adolescente")
	}
}

/* la manera mas facil es la de else ya que es por
descarte...*/

/*if(edad > 17){
	alert ("mayor de edad")
}

if (edad > 12 && edad < 18){
	alert ("es adolescente")
}

if (edad < 13){
	alert ("es un niño")
}
*/



}//FIN DE LA FUNCIÓN