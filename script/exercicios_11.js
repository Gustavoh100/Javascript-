//Peça dois números e uma operação matemática (+, -, *, /). Calcule e mostre o resultado da operação escolhida.
const numero = Number(prompt("Digite um número: "))
const numero2 = Number(prompt("Digite outro número: "))
const operacao = prompt("Digite uma operação matematica:")

if (operacao == "*"){
    alert(numero*numero2)
}else if (operacao == "/"){
    alert(numero/numero2)
}else if (operacao == "-"){
    alert(numero-numero2)
}else if (operacao == "+"){
    alert(numero+numero2)
}else{
    alert("não encontrado!")
}