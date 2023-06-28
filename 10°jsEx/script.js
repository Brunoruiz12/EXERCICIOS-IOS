let datas = document.getElementById("dias")
let resposta = document.getElementById("Resposta")

function dia()
{
    switch(datas.value)
    {
        case "1":
            resposta.innerHTML = "Segunda-feira dia útil";
            break;
        case "2":
            resposta.innerHTML = "Terça-feira útil";
            break
            case "3":
            resposta.innerHTML = "Quata-feira dia útil";
            break
            case "4":
            resposta.innerHTML = "Quinta-feira dia útil";
            break
            case "5":
            resposta.innerHTML = "Sexta-feira dia útil";
            break
            case "6":
            resposta.innerHTML = "Hoje é Final de semana";
            break
            case "7":
            resposta.innerHTML = "Hoje é Final de semana";
        
        default:
                resposta.innerHTML = "Invalido"
                break;

    }
}



let n1 = document.getElementById ("n1")
let n2 = document.getElementById ("n2")
let operador =document.getElementById ("operador")
let resultado
let apre = document.getElementById("apre")
function calcular()
{

switch(operador.value)
{
 case  "1": resultado = parseInt(n1.value) + parseInt(n2.value)
 apre.innerHTML = "o resultado da soma é "+ resultado 
 break
 case  "2": resultado = parseInt(n1.value) - parseInt(n2.value)
 apre.innerHTML = "o resultado da subtração é "+ resultado 
break
 case  "3": resultado = parseInt(n1.value) / parseInt(n2.value)
 apre.innerHTML = "o resultado da divisao é "+ resultado 
 break
 case  "4": resultado = parseInt(n1.value) * parseInt(n2.value)
 apre.innerHTML = "o resultado da multiplicaçao é "+ resultado 

 default:
 resposta.innerHTML = "Invalido"
                break;











}








}


