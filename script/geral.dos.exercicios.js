//exercicio2
//
//
function exercicio2() {

    const valorGanhadoPorHora = Number(prompt("Digite o valor ganhado por hora:"))
    const QuantidadeDeHoras = Number(prompt("Digite suas horas trabalhadas:"))

    const resultado = valorGanhadoPorHora * QuantidadeDeHoras

    alert("seu salario é:" + resultado)

}
const buttonExercicio2 = document.getElementById("exercicio2")
buttonExercicio2.addEventListener('click', () => { exercicio2() })


// exercicio3
function exercicio3() {
    const peso1 = Number(prompt(" Digite o peso da pessoa 1"))
    const peso2 = Number(prompt(" Digite o peso da pessoa 2"))
    const peso3 = Number(prompt(" Digite o peso da pessoa 3"))
    const peso4 = Number(prompt(" Digite o peso da pessoa 4"))
    const peso5 = Number(prompt(" Digite o peso da pessoa 5"))
    //processamento

    const resultado = (peso1 + peso2 + peso3 + peso4 + peso5) / 5
    // saida 
    alert("Media dos pesos " + resultado)


}

const buttonExercicio3 = document.getElementById("exercicio3")
buttonExercicio3.addEventListener('click', () => { exercicio3() })

//exercicio4

function exercicio4() {
    const GrauCelsius = Number(prompt("Digite a temperatura em grau Celsius"))
    // processamento 
    const resultado = (9 * GrauCelsius + 160) / 5
    // saida 
    alert("fahrenheit  " + resultado)

}
const buttonExercicio4 = document.getElementById("exercicio4")
buttonExercicio4.addEventListener('click', () => { exercicio4() })


//exercicio5
function exercicio5() {
    const Milhas = Number(prompt("Digite o números de milhas"))
    const resultado = (Milhas * 1.60934)
    alert(resultado + " KM ")

}

const buttonExercicio5 = document.getElementById("exercicio5")
buttonExercicio5.addEventListener('click', () => { exercicio5() })

//exercicio6
function exercicio6() {
    const segundos = Number(prompt("Digite a duração do evento em segundos."))
    const minutos = (segundos / 60)
    const horas = (minutos / 60)
    alert(segundos + " SEGUNDOS \n" + minutos + " MINUTOS\n" + horas + " HORAS ")
}
const buttonExercicio6 = document.getElementById("exercicio6")
buttonExercicio6.addEventListener('click', () => { exercicio6() })

// exercicio 7
function exercicio7() {
    const quilometros = Number(prompt("Digite o numero em quilometros."))
    const metros = (quilometros * 1000)
    const centimetro = (metros * 100)
    alert(quilometros + " KM \n" + metros + " MERTROS \n " + centimetro + " CEMTIMETRO")
}
const buttonExercicio7 = document.getElementById("exercicio7")
buttonExercicio7.addEventListener('click', () => { exercicio7() })

// exercicio 8
function exercicio8() {
    const numero = Number(prompt("Digite um numero inteiro para obter a tabuada do 0 ao 10."))
    const resultado0 = (numero * 0)
    const resultado1 = (numero * 1)
    const resultado2 = (numero * 2)
    const resultado3 = (numero * 3)
    const resultado4 = (numero * 4)
    const resultado5 = (numero * 5)
    const resultado6 = (numero * 6)
    const resultado7 = (numero * 7)
    const resultado8 = (numero * 8)
    const resultado9 = (numero * 9)
    const resultado10 = (numero * 10)

    alert("multiplicado por 0 sera : " + resultado0)
    alert("multiplicado por 1 sera : " + resultado1)
    alert("multiplicado por 2 sera :" + resultado2)
    alert("multiplicado por 6 sera : " + resultado6)
    alert("multiplicado por 7 sera :" + resultado7)
    alert("multiplicado por 8 sera : " + resultado8)
    alert("multiplicado por 9 sera :" + resultado9)
    alert("multiplicado por 10 sera" + resultado10)
}
const buttonExercicio8 = document.getElementById("exercicio8")
buttonExercicio8.addEventListener('click', () => { exercicio8() })
