let numero = document.getElementById("numero")
let resposta = document.getElementById("Resposta")

function aperte()
{
    switch(numero.value)
    {
        case "1":
            resposta.innerHTML = "você escolheu,Maça";
            break;
        case "2":
            resposta.innerHTML = "você escolheu, Banana";
            break;
            default:
                resposta.innerHTML = "Não tem essa parada"
                break;

    }
}