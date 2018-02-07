function Mostrar()
{
//tomo la edad  

var edad;

edad = document.getElementById('edad').value;

if (edad>18) 
	{
	alert("mayor de edad");
	}

if (!(edad>12 && edad <17)) 
	{
	alert("adolescente");
	}

if (edad<13) 
	{
	alert("es menor de edad");
	}


}//FIN DE LA FUNCIÓN