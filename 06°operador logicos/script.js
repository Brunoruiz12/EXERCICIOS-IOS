let idade = document.getElementById("idade");
let titulo = document.getElementById("titulo")
let resultado; document.getElementById("resultado")
function Aperta()
{
    if(idade.value >= 16 && titulo.value == "Sim")
    {
    
        alert("Você poderá votar")

    }
    else
    {
        alert("Não podera votar")
    }
}

let minutos;
let preço; 
if(minutos <= 200)
{
 preco = 0.2

}
    else
    {
        if(minutos <= 400)
        {
            preco = 0.18


        }
        else
        {
            preco = 0.15
        }
    }    