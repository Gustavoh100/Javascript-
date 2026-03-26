 function exercicio2() {

     const valorGanhadoPorHora = Number(prompt("Digite o valor ganhado por hora:"))
     const QuantidadeDeHoras = Number(prompt("Digite suas horas trabalhadas:"))
     
     const resultado = valorGanhadoPorHora*QuantidadeDeHoras
      
     alert("seu salario é:" + resultado)

 }     
 const buttonExercicio2 = document.getElementById("exercicio2")
 buttonExercicio2.addEventListener('click', () => {exercicio2()})
// carinha de escuta 
