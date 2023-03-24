//Aferidor de pressão --> Normal 120 por 80

//Variáveis (Letras)
var nome = window.prompt("Qual seu nome?")
window.alert("Prazer em conheçer você")
var saude = window.confirm("Está se sentindo bem?")

//Variáveis (Number)
var sis = Number(window.prompt("Qual o número máximo exibido?(Sistólico)"))
var dias = Number(window.prompt("Qual o número minimo exibido?(Diastólico)"))

//Sistólica
if(sis >= 130){
    var pressão = "alta "
    var Psis = "Alta"
}
else if(sis < 130 && sis >=117){
    var pressão = "normal "
    var Psis = "Normal"
}
else {
    var pressão = "baixa "
    var Psis = "Baixa"
}

//Diastólica
if(dias <= 75){
    var pressão = pressão + "baixa"
    var Pdias = "Baixa"
}
else if (dias > 75 && dias < 86){
    var pressão = pressão + "normal"
    var Pdias = "Normal"
}
else{
    var pressão = pressão + "alta"
    var Pdias = "Alta"
}

if(pressão == "alta alta" || "alta normal" || "normal alta"){
    document.write(`Olá, ${nome}. Cuidado, Sua Pressão Arterial está Alta! </br>`)
}
else if (pressão == "normal normal"){
    document.write(`Olá, ${nome}. Parabéns, Sua Pressão Arterial está Normal! </br>`)
}
else{
    document.write(`Olá, ${nome}. Cuidado, Sua Pressão Arterial está Baixa! </br>`)
}
document.write(" Detalhadamento:</br> ")

document.write(`Pressão Sistólica: ${sis}; ${Psis} </br>`)
document.write(`Pressão Diastólica: ${dias}; ${Pdias} </br>`)

//Determinar Estado
if(saude == false){
    document.write("<h2>Se não está se sentindo bem disque</h2> ")
    document.write("<h1>193 Bombeiros</h1> ")
    document.write("<h1>190 SAMU")
}

