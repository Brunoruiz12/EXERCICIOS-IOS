var metro = document.getElementById ("metro");
var cm;
var resultado = document.getElementById("resultado");
function conversao()
{

   cm = parseInt(metro.value)*100
   resultado.innerHTML = cm
}