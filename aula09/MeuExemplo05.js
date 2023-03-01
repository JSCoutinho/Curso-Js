
//Cor de Fundo
var cor = window.confirm("Ativar modo noturno?")
if(cor == true){
var fundo = window.document.body
fundo.style.backgroundColor = "Black"
fundo.style.color = "White"}

//Boas Vindas
var nome = window.prompt("Como posso te chamar?")
var bemvindo = window.document.getElementsByTagName('p')[0]
bemvindo.innerHTML = `Olá, <strong>${nome}.</strong> Estamos calculando para você...`

//Número de Números
var quantidade = Number(window.prompt("Qual a quantidade de números a ser calculada?"))

//Definindo quantidade de contas
if(quantidade == "2"){
    var n1 = Number(window.prompt("Primeiro Número:"))
    var n2 = Number(window.prompt("Segundo Número:"))

    var conta = (n1 + n2) / 2
        var resultado = window.document.getElementsByTagName('b')[0]
        resultado.innerHTML = `<strong>${conta}</strong>`
}
else if(quantidade == "3"){
    var n1 = Number(window.prompt("Primeiro Número:"))
    var n2 = Number(window.prompt("Segundo Número:"))
    var n3 = Number(window.prompt("Terceiro Número:"))
    
    var conta = (n1 + n2 + n3) / 3
        var resultado = window.document.getElementsByTagName('b')[0]
        resultado.innerHTML = `<strong>${conta}</strong>`
    }
else if (quantidade == "4"){
    var n1 = Number(window.prompt("Primeiro Número:"))
    var n2 = Number(window.prompt("Segundo Número:"))
    var n3 = Number(window.prompt("Terceiro Número:"))
    var n4 = Number(window.prompt("Quarto Número:"))
    
    var conta = (n1 + n2 + n3 + n4) / 4
        var resultado = window.document.getElementsByTagName('b')[0]
        resultado.innerHTML = `<strong>${conta}</strong>`
}
else if (quantidade == "5"){
    var n1 = Number(window.prompt("Primeiro Número:"))
    var n2 = Number(window.prompt("Segundo Número:"))
    var n3 = Number(window.prompt("Terceiro Número:"))
    var n4 = Number(window.prompt("Quarto Número:"))
    var n5 = Number(window.prompt("Quinto Número:"))

    var conta = (n1 + n2 + n3 + n4 + n5) / 5
        var resultado = window.document.getElementsByTagName('b')[0]
        resultado.innerHTML = `<strong>${conta}</strong>`
    }
else if (quantidade == "6"){
    var n1 = Number(window.prompt("Primeiro Número:"))
    var n2 = Number(window.prompt("Segundo Número:"))
    var n3 = Number(window.prompt("Terceiro Número:"))
    var n4 = Number(window.prompt("Quarto Número:"))
    var n5 = Number(window.prompt("Quinto Número:"))
    var n6 = Number(window.prompt("Sexto Número"))

    var conta = (n1 + n2 + n3 + n4 + n5 + n6 ) / 6
        var resultado = window.document.getElementsByTagName('b')[0]
        resultado.innerHTML = `<strong>${conta}</strong>`
}
else if (quantidade == "7"){
    var n1 = Number(window.prompt("Primeiro Número:"))
    var n2 = Number(window.prompt("Segundo Número:"))
    var n3 = Number(window.prompt("Terceiro Número:"))
    var n4 = Number(window.prompt("Quarto Número:"))
    var n5 = Number(window.prompt("Quinto Número:"))
    var n6 = Number(window.prompt("Sexto Número"))
    var n7 = Number(window.prompt("Sétimo Número"))

    var conta = (n1 + n2 + n3 + n4 + n5 + n6 + n7) / 7
        var resultado = window.document.getElementsByTagName('b')[0]
        resultado.innerHTML = `<strong>${conta}</strong>`
    }
else if (quantidade == "8"){
    var n1 = Number(window.prompt("Primeiro Número:"))
    var n2 = Number(window.prompt("Segundo Número:"))
    var n3 = Number(window.prompt("Terceiro Número:"))
    var n4 = Number(window.prompt("Quarto Número:"))
    var n5 = Number(window.prompt("Quinto Número:"))
    var n6 = Number(window.prompt("Sexto Número"))
    var n7 = Number(window.prompt("Sétimo Número"))
    var n8 = Number(window.prompt("Oitavo Número:"))

    var conta = (n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8) / 8
        var resultado = window.document.getElementsByTagName('b')[0]
        resultado.innerHTML = `<strong>${conta}</strong>`
}
else if (quantidade == "9"){
    var n1 = Number(window.prompt("Primeiro Número:"))
    var n2 = Number(window.prompt("Segundo Número:"))
    var n3 = Number(window.prompt("Terceiro Número:"))
    var n4 = Number(window.prompt("Quarto Número:"))
    var n5 = Number(window.prompt("Quinto Número:"))
    var n6 = Number(window.prompt("Sexto Número"))
    var n7 = Number(window.prompt("Sétimo Número"))
    var n8 = Number(window.prompt("Oitavo Número:"))
    var n9 = Number(window.prompt("Nono Número:"))

    var conta = (n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9) / 9
        var resultado = window.document.getElementsByTagName('b')[0]
        resultado.innerHTML = `<strong>${conta}</strong>`
}
else if (quantidade == "10"){
    var n1 = Number(window.prompt("Primeiro Número:"))
    var n2 = Number(window.prompt("Segundo Número:"))
    var n3 = Number(window.prompt("Terceiro Número:"))
    var n4 = Number(window.prompt("Quarto Número:"))
    var n5 = Number(window.prompt("Quinto Número:"))
    var n6 = Number(window.prompt("Sexto Número"))
    var n7 = Number(window.prompt("Sétimo Número"))
    var n8 = Number(window.prompt("Oitavo Número:"))
    var n9 = Number(window.prompt("Nono Número:"))
    var n10 = Number(window.prompt("Décimo Número"))

    var conta = (n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10) / 10
        var resultado = window.document.getElementsByTagName('b')[0]
        resultado.innerHTML = `<strong>${conta}</strong>`
}

var recomend = window.document.getElementsByTagName("p")[2]
recomend.innerText= "Médias Boladas Só aqui"