var nome = window.prompt("Qual é o seu nome")
var sal = Number(window.prompt("Qual é o seu salário"))
var tempo = Number(window.prompt("Quantos meses está trabalhando?"))

var saldo = sal * tempo

document.write(`Olá, ${nome.toUpperCase()} o seu saldo é ${saldo.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}!`)