// evento em segundos , e tranforme em horas minutos  e segundos 
const segundos = Number(prompt("Digite a duração do evento em segundos."))
const minutos = (segundos/60)
const horas = ( minutos/60)
alert(segundos + " SEGUNDOS \n"+ minutos + " MINUTOS\n"+ horas + " HORAS ")