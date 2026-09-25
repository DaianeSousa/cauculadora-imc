const peso =document.getElementById("peso")
const altura = document.getElementById("altura")
const botao = document.getElementById("botao")

function calcularIMC(){
    console.log(peso.ariaValueMax, altura.value)



}

botao.addEventListener("click", calcularIMC)