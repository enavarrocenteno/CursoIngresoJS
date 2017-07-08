function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

/*if(mesDelAño=="Enero")
{
	alert ("Que comience bien el año!");
}
if(mesDelAño=="Marzo")
{
	alert ("A clase!");
}
if(mesDelAño=="Diciembre")
{
	alert ("Felices fiestas!");
}
*/

switch (mesDelAño) {
    case "Enero":
        
        alert ("que comiences bien el año!!!");
        break;
    case "Marzo":
        
        alert ("a clases!!");
        break;
    case "Julio":
        
        alert("a vacaciones!!!");
        break;
    case "Diciembre":
        
        alert("Felices fiestas!!");
        break;
    
}




}//FIN DE LA FUNCIÓN