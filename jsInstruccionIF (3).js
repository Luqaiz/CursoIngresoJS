function Mostrar()
{
//tomo la edad  
var edad 

edad=document.getElementById('edad').value
edad=parseInt(edad);
if(edad > 17){
	alert ("es mayor de edad")
}

if (edad < 18){
	alert ("es menor de edad")
}

/*la otra manera es

else { //else significa "SINO"
	alert (es menor de edad)
}*/ 

}//FIN DE LA FUNCIÓN