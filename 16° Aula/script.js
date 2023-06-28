// eventos
/* No java script, eventos são açoes ou ocorrencias que acontece
na pagina web que estamos implementado.
Esses eventos geralmente invocam funçoes que irão 
executar as operaçoes desejada. Exemplo de eventos 
são: o usario clica em um botão na pagina. */


/* Exemplos de eventos:
- Clicar no mouse;
- Quando a página é carregada
- Quando uma iamgem foi carregada
- Quando o mouse passa o elemento 
- Quando um formulario Html é enviado.*/

let nome = document.getElementById('abc')
function mudar()
{
    nome.innerHTML = 'São os Alunos de Santo Amaro s2'
}

let datadehoje = document.getElementById('demo')
function data ()
{
    datadehoje.innerHTML = Date();
}

function carregarAviso()
{
    alert('Hello my brother you is lindo')
}

let obj = document.getElementById('obj')
function Mudardefrase()
{
   obj.innerHTML = 'thank you'
}

function voltarAfrase()
{
    obj.innerHTML = 'Passe o mouse!'
}