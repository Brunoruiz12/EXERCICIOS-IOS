let base =  document.getElementById("b")
let altura = document.getElementById("h")
let resultado = document.getElementById("rel")
let soma 
function Calcule()
{
 
    soma = (parseFloat(b.value) * parseFloat(h.value))/2
    resultado.innerHTML = (soma + 'm²')
}