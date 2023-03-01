//Boas Vindas
window.prompt("Informe o Usuário")
var saber = window.confirm("Você sabe sua senha?")

if(saber == false){ //Definindo se sabe ou não a senha
    var gosto = window.confirm("Pergunta de Segurança: Você gosta de gatinhos?")
}
else {//O que mostrar quando souber
    var senha = window.prompt("Informe a senha")
    window.alert("Ok, você não é o Márcio. Precisamos Cadastrá-lo!")
}

if(gosto == true){ //Resposta da pergunta de segurança
    window.alert("Bem vindo, Márcio. Bom tê aqui novamente!")
    var gato = "Gosta de Gatinhos"
}
else {
    window.alert("Ok, você não é o Márcio. Precisamos Cadastrá-lo!")
    var gato = "Não Gosta de Gatinhos"
}

//Cadastro
var nome = window.prompt("Como devo te chamar?")
var idade = Number(window.prompt(`Ok, ${nome}. Informe sua idade!`))
var curso = window.prompt("Qual curso deseja fazer?")
var sexo = window.prompt("Qual o seu gênero?")

//Declarando variáveis do cadastro
var maioridade = idade >= 18 ? "Maior" : "Menor";
var Estado = curso.toUpperCase() == "JAVASCRIPT" ? "Premium" : "Normal" ;
var Bemvind = sexo.toUpperCase() == "MASCULINO" ? "Bem-vindo!" : "Bem-vinda!"

//Mensagens de Boas vindas
document.write(`${Bemvind} ${nome}, recebemos informações que é de ${maioridade}! </br>`)
document.write(`E por sabermos que é um Membro ${Estado} preparamos um conteúdo para você </br>`)

if(Estado == "Premium"){
    document.write("<h2>Programação</h2>")
}
else{
    document.write("<h2>League of Legends</h2>")
}

if(Estado == "Premium"){
    document.write("<p>Uma arte milenar que consiste em mandar comandos ao navegador do cliente, fazendo assim uma série de tarefas. Também conhecida por criar aplicativos e jogos, além de manter diversos aparelhos funcionando corretamente!</p>") 
}
else{
    document.write("<p>Uma jogo Horrivel em que pessoas se estressam, nunca chegue perto deste jogo na sua vida. Se for jogar, tenha em mente que Poppy é o melhor campeão a se escolher. Boa noite!</p>")
}

document.write("Se gostou do nosso conteúdo confirme se suas informações estão corretas:<br/>")
document.write("<h2>Dados</h2>")
document.write(`Nome: ${nome.toUpperCase()}</br>Idade: ${idade}, de ${maioridade}</br>Curso de Interesse: ${curso.toUpperCase()}</br>${gato}!</br>`)

if(gato == "Gosta de Gatinhos"){
document.write("Gostariamos de você como nosso aluno, Para entrar Ligue 555 990 454")
}
else{
    document.write("Você é um monstro, SAIA DAQUI!")
}