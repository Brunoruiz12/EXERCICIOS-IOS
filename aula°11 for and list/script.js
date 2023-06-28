let x = document.getElementById("ValorInicio")
let y = document.getElementById("valor final")

function contar()
{
    while(x.value <= y.value)
{
   //Criar um elemento p 
   let paragrafo = document.createElement("p")
   //Criar um text
   let text = document.createTextNode(x.value)
   
   //ADD um texto no elemento
   paragrafo.appendChild(text);
   
   //adicionar o elemento no section

   
    document.getElementById("contar").appendChild (paragrafo)
    console.log(x)
    x.value++ //(x =  x + 1)
}

} 

