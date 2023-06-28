const pessoa = 
{
    Primeiro: "Brunão",
    Segundonome:"Ruiz",
    id: 335214,
    FullNome: function()
    {
        
        return this.PrimeiroNome + " " + this.SegundoNome;
    }
}

//vetor
let cor = ["Azul", "Vermelho"]

const tarefas = 
[
    {
        id: 1,
        texto:'Levar o lixo para fora',
        Completado: true, 
    },
    {
        id:2,
        texto: 'Encontrar com o chefe',
        Completado: true,
    },

    {
        id:3,
        texto:'Consulta no dentista',
        completado:false,
    }
]

tarefas.forEach(teste)

function teste(tarefas)
{
    console.log(tarefas.texto)
}