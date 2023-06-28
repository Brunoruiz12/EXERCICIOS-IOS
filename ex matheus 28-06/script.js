function calcularMedia() {
    var nome = document.getElementById("nome").value;
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);

    if (isNaN(nota1) || isNaN(nota2)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira notas válidas.";
        return;
    }

    var media = (nota1 + nota2) / 2;

    var resultado = "Nome do Aluno: " + nome + "<br>";
    resultado += "Média das Notas: " + media.toFixed(2) + "<br>";

    if (media >= 6) {
        resultado += "Situação: Aprovado";
    } else {
        resultado += "Situação: Reprovado";
    }

    document.getElementById("resultado").innerHTML = resultado;
}
