algoritmo "Primeiro Programa"


var
  VetA :vetor [1..6] de inteiro
  VetB :vetor [1..6] de inteiro
  VetC :vetor [1..12] de inteiro
  contador: real
inicio
  para contador de 1 ate 6 passo 1 faca
    leia(VetA[contador])


  fimpara
  para contador de 1 ate 6 passo 1 faca
    leia(VetB[contador])


  fimpara
  para contador de 1 ate 6 passo 1 faca
    vetC [contador ] <- vetA[contador]
    vetC[contador+6]<- vetB[contador]



  fimpara
  para contador de 1 ate 12 passo 1 faca
    escreval (" vetor C: "vetC[contador])
  fimpara

fimalgoritmo
