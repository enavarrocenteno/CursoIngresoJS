/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostar()
{	
	

	var elNombre=document.getElementById('elNombre').value;
	var laEdad=document.getElementById('laEdad').value;

	alert("Usted se llama "+ elNombre +" y tiene "+ laEdad +"años");

}

