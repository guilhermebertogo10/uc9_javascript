// Permitir o input do usuário em 3S
let prompt = require("prompt-sync")();


atividadeNome()
function atividadeNome(){
    
    let nome = prompt("Digite o seu nome: ")
    let sobrenome = prompt("Digite o seu sobrenome: ") 
    let nome_completo = nome+ " " +sobrenome
    
    console.log("Seja bem-vindo(a) "+ nome_completo)

}


atividadeIdade()
function atividadeIdade(){
    
    let idade = parseInt(prompt("Digite sua idade: "))
    //idade = parseInt(idade)
    
    let idade_futura = idade + 5

    console.log("Daqui 5 anos você tera: "+idade_futura)
}

atividadeNascimento()
function atividadeNascimento(){
    
    let ano_nascimento = parseInt (prompt("Digite o ano de seu nascimento: "))
    let ano_atual = 2025
    let idade_atual = ano_atual - ano_nascimento

    console.log("Você esta com "+idade_atual+" anos ")


}

atividadeNumeros
function atividadeNumeros(){

    let numero1 = parseInt (prompt("Digite o primeiro número: "))
    let numero2 = parseInt (prompt("Digite o segundo número: "))
    let soma = numero1 + numero2

    console.log("A soma dos dois numeros é: "+ soma)


}

atividadeDistancia()
function atividadeDistancia(){

    let distancia_metros = parseInt(prompt("Digite uma distância em metros: "))
    let disancia_kilometros = distancia_metros / 1000

    console.log("A distâcia de metros convertida para KM é: "+ disancia_kilometros)


}

atividadeAlunos()
function atividadeAlunos(){

    let nota1 = parseInt(prompt("Digite a primeira nota do aluno: "))
    let nota2 = parseInt(prompt("Digite a segunda nota do aluno: "))
    
    let media = (nota1 + nota2) / 2

    console.log("A media de notas do aluno é: "+media)

}

atividadeTabuada()
function atividadeTabuada(){

    let numero1 = parseInt(prompt("Digite um número: "))
    let resultado1 = numero1 *1
    let resultado2 = numero1 *2
    let resultado3 = numero1 *3
    let resultado4 = numero1 *4
    let resultado5 = numero1 *5
    let resultado6 = numero1 *6
    let resultado7 = numero1 *7
    let resultado8 = numero1 *8
    let resultado9 = numero1 *9
    let resultado10 = numero1 *10

    console.log("A tabuada do número digitado é :"+"\n"+ resultado1+"\n"+resultado2+"\n"+resultado3+"\n"+resultado4+"\n"+resultado5+"\n"+resultado6+"\n"+resultado7+"\n"+resultado8+"\n"+resultado9+"\n"+resultado10)


}

function atividadeamericano(){

    let moment = require("moment")()

}