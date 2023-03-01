//Nome
var nome = window.prompt("Olá, para começarmos como eu posso te chamar?")


//Modo noturno
var cor = window.confirm(`Quer ativar o modo noturno, ${nome}?`)
if(cor == false){
    var fundo = window.document.body
    fundo.style.backgroundColor = "White"
    fundo.style.color = "Black"
}

//Perguntas Iniciais
var peso = Number(window.prompt("Qual é o seu peso em Kg?"))
var altura = Number(window.prompt("Qual é sua altura em Metros usando . ?"))


//Conta chata ZZzz
var conta1 = altura * altura
var IMC = peso / conta1

//IMC
var imc = window.document.getElementsByTagName('h1')[1]
imc.innerText = IMC

if (IMC > 18.5 && IMC < 24.9 ){
    var recom = window.document.getElementsByTagName('p')[2]
    recom.innerText = "Parabéns, seu IMC é o ideal para sua altura! Normal"
}
else if(IMC < 18.5){
    var recom = window.document.getElementsByTagName('p')[2]
    recom.innerText = "Cuidado, seu IMC é abaixo do ideal para sua altura! Abaixo do Peso"
}
else if (IMC >= 25 && IMC <= 29.9){
    var recom = window.document.getElementsByTagName('p')[2]
    recom.innerText = "Cuidado, seu IMC é acima do ideal para sua altura! Sobrepeso"
}
else if (IMC >= 30 && IMC <= 34.9){
    var recom = window.document.getElementsByTagName('p')[2]
    recom.innerText = "Cuidado, seu IMC é acima do ideal para sua altura! Obesidade I"
}
else if (IMC >= 35 && IMC <= 39){
    var recom = window.document.getElementsByTagName('p')[2]
    recom.innerText = "Cuidado, seu IMC é acima do ideal para sua altura! Obesidade II"
}
else{
    var recom = window.document.getElementsByTagName('p')[2]
    recom.innerText = "Cuidado, seu IMC é acima do ideal para sua altura! Obesidade III"
}
var bemvindo = window.document.getElementsByTagName('p')[0]
bemvindo.innerText = `Bem vindo(a), ${nome}. Estamos Calculando...`