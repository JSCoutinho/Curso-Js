
//Declarando Variáveis (String) ZZzz
var nome = window.prompt("Primeiro informe seu nome")
var Gênero = window.prompt("Gênero:")
var conta = window.prompt("Que quer descobrir? (Juros, Montante ou Taxa)")


//Se quiser saber o montante
if(conta.toUpperCase() == "MONTANTE"){
    //Declarando Variáveis (Number)
    var i = Number(window.prompt("Informe a taxa por mês"))
    var t = Number(window.prompt("Informe o tempo em meses"))
    var C = Number(window.prompt("Informe o Capital Inicial")) 

    //Contas Chatas O_o
    var J = C * t * i
    var M = J + C
    
    document.write(`<h1>Calculadoras Online: Descobrir Montante</h1>`)
    
    //Mensagem de Boas Vindas
if(Gênero.toUpperCase() == "FEMININO"){
    document.write(`Bem vinda, ${nome.toUpperCase()}. </br> Agradecemos pela visita! </br>`)
}
else if(Gênero.toUpperCase() == "MASCULINO"){
    document.write(`Bem vindo, meu mano ${nome.toUpperCase()}. </br> Valeu por nos visitar, meu lindo!</br>`)
}
else {
    document.write(`Bem vinde, ${nome.toUpperCase()}. Agradecemos a visita! </br>`)
}


    document.write(`Seu Montante é igual a ${M.toLocaleString(`pt-br`,{style: 'currency', currency: 'BRL'})}`)
}
else if(conta.toUpperCase() == "JUROS"){
    //Declarando Variáveis (Number)
    var i = Number(window.prompt("Informe a taxa por mês"))
    var t = Number(window.prompt("Informe o tempo em meses"))
    var C = Number(window.prompt("Informe o Capital Inicial")) 

    //Contas Chatas O_o
    var J = C * t * i

    document.write(`<h1>Calculadoras Online: Descobrir Juros</h1>`)

    //Mensagem de Boas Vindas
if(Gênero.toUpperCase() == "FEMININO"){
    document.write(`Bem vinda, ${nome.toUpperCase()}. </br> Agradecemos pela visita! </br>`)
}
else if(Gênero.toUpperCase() == "MASCULINO"){
    document.write(`Bem vindo, meu mano ${nome.toUpperCase()}. </br> Valeu por nos visitar, meu lindo!</br>`)
}
else {
    document.write(`Bem vinde, ${nome.toUpperCase()}. Agradecemos a visita! </br>`)
}

    document.write(`Seu Juros é igual a ${J.toLocaleString(`pt-br`, {style: 'currency', currency: 'BRL'})}`)
}
else if(conta.toUpperCase() == "TAXA"){
    //Declarando Variáveis (Number)
    var J = Number(window.prompt("Informe o Juros"))
    var t = Number(window.prompt("Informe o tempo em meses"))
    var C = Number(window.prompt("Informe o Capital Inicial")) 

    //Contas Chatas O_o
    var i = J / C * t 

    document.write(`<h1>Calculadoras Online: Descobrir Taxa</h1>`)
   
   //Mensagem de Boas Vindas
if(Gênero.toUpperCase() == "FEMININO"){
    document.write(`Bem vinda, ${nome.toUpperCase()}. </br> Agradecemos pela visita! </br>`)
}
else if(Gênero.toUpperCase() == "MASCULINO"){
    document.write(`Bem vindo, meu mano ${nome.toUpperCase()}. </br> Valeu por nos visitar, meu lindo!</br>`)
}
else {
    document.write(`Bem vinde, ${nome.toUpperCase()}. Agradecemos a visita! </br>`)
}

    document.write(`Sua Taxa é igual a ${i}%`)
}
else {
    document.write(`<h1>Calculadoras Online: OPS</h1>`)

//Mensagem de Boas Vindas
if(Gênero.toUpperCase() == "FEMININO"){
    document.write(`Bem vinda, ${nome.toUpperCase()}. </br> Agradecemos pela visita! </br>`)
}
else if(Gênero.toUpperCase() == "MASCULINO"){
    document.write(`Bem vindo, meu mano ${nome.toUpperCase()}. </br> Valeu por nos visitar, meu lindo!</br>`)
}
else {
    document.write(`Bem vinde, ${nome.toUpperCase()}. Agradecemos a visita! </br>`)
}

    document.write("<h2>ERROR</h2> </br>")
    document.write("Não foi possivel resolver o cálculo, tente novamente!")
}
    

//Obs juros simples --> J=Cit depois M=J+C
//Juros compostos --> M=C.(1-i)^n