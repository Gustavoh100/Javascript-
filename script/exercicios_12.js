//Peça um número e informe se ele é positivo ou negativo.
const numero = Number(prompt("Digite um numero e descubra se é positivo ou negativo:"))

if ( numero >= 0 ){
    alert("número positivo")
}else if ( numero < 0 ){
    alert("número negativo")
}else { 
    alert("erro")
}