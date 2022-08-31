/*7. Crie um array para salvar o resultado das operações e crie
também uma função para exibir o histórico dos resultados.
ATENÇÃO!! Faça um commit para cada item do exercício.*/

var numA = 0
var numB = 0
var resultado = []
var continuar = 1
var contador = 0

numA = parseFloat(prompt("Insira um número para A: "))
numB = parseFloat(prompt("Insira outro número para B: "))

while (continuar == 1) {
    var opcao = prompt("Qual opção você escolhe? 1 - soma / 2 - subtração / 3 - multiplacação / 4 - divisão ")

    if (opcao == 1) {
        resultado[contador] = Soma()
        console.log("O resultado da soma é: " + resultado[contador])
        contador++
    }

    else if (opcao == 2) {
        resultado[contador] = Subtrair()
        console.log("O resultado da subtração é: " + resultado[contador])
        contador++
    }

    else if (opcao == 3) {
        resultado[contador] = multiplicar()
        console.log("O resultado da multiplicação é: " + resultado[contador])
        contador++
    }

    else if (opcao == 4) {
        resultado[contador] = dividir()
        console.log("O resultado da divisão é: " + resultado[contador])
        contador++
    }
    continuar = prompt("Deseja fazer outra operação ou deseja encerrar operação? 1 - sim / 2 - não")
    ExibirHistorico()
}

function Soma() {
    return numA + numB
}
function Subtrair() {
    return numA - numB
}
function multiplicar() {
    return numA * numB
}
function dividir() {
    return numA / numB
}
function ExibirHistorico() {
    for (var index = 0; index < contador; index++)
        console.log(resultado[index])
}


