const nota1 = Number(prompt("Digite a primeira nota "))
const nota2 = Number(prompt("Digite a segunda nota "))
const nota3 = Number(prompt("Digite a terceira nota "))

const media = (nota1 + nota2 + nota3) / 3
console.log(media)// e ele esta no f12 na aba console 

if (media < 3) {
    alert("horrivel")
} else if (media < 7) {
    alert("da para melhorar")
} else if (media <= 10) {
    alert(" Excelente")
} else {
    alert("essa nota não existe ")
}