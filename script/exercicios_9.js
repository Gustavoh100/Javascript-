const nota1 = Number(prompt("Digite a primeira nota "))
const nota2 = Number(prompt("Digite a segunda nota "))
const nota3 = Number(prompt("Digite a terceira nota "))

const media = (nota1 + nota2 + nota3) / 3
console.log(media)// e ele esta no f12 na aba console

//Aprovado" se a média for maior ou igual a 7
//"Recuperação" se for maior ou igual a 5 e menor que 7
//"Reprovado" se for menor que 5
if (media < 5) {
    alert("REPROVADO")
} else if (media >= 5 && media < 7) {
    alert("RECUPERAÇÃO")
} else if (media <= 10) {
    alert("APROVADO")
} else {
    alert("não existe")
}