let ReceberValor = document.getElementById("recebervalor")
let resultado = document.getElementById("parouImpar")
function PAR()
{
    if(ReceberValor.value % 2 == 0) {
        resultado.innerHTML = "PAR"
    }else{  
        resultado.innerHTML = "Impar"
    }
}