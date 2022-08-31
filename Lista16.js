/*6. Faça com que seu usuário escolha qual função ele deseja fazer
com os números que ele inseriu, e depois de realizar essa
operação pergunte se ele deseja fazer outra ou encerrar a
aplicação.
7. Crie um array para salvar o resultado das operações e crie
também uma função para exibir o histórico dos resultados.
ATENÇÃO!! Faça um commit para cada item do exercício.*/

var numA = 0
var numB = 0
var resultado = []

numA = parseFloat(prompt("Insira um número para A: "))
numB = parseFloat(prompt("Insira outro número para B: "))

var opcao = prompt("Qual opção você escolhe? 1 - soma / 2 - subtração / 3 - multiplacação / 4 - divisão ")

if (opcao == 1) {
    console.log(Soma())
}

if (opcao == 2) {
    Subtrair()
}

if (opcao == 3) {
    function multiplicar() {
        return numA * numB
    }
}

if (opcao == 4) {
    function dividir() {
        return numA / numB
    }
}

function Soma() {
    return numA + numB
}
function multiplicar() {
    return numA * numB
}


