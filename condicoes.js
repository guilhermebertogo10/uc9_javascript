// Condições simples

// > maior
// < menor
// == igual
// >= maior ou igual
// <= menor ou igual
// != diferente 


let prompt = require("prompt-sync")();

let idade = 15

if(idade >= 18){
    console.log("Você ja pode tirar CNH")
}

else{
    console.log("Você ainda não tem idade para tirar CNH")
}

let senha = prompt("Digite a senha do sistema: ")

if(senha == "admin"){
    console.log("Acesso concedido!")

}

else{
    console.log("Acesso negado...")
}


let kilos = parseInt(prompt("DIgite a quantidade de Kilos: "))

if(kilos > 100){
    let total = kilos * 55.90
    console.log("Total de vendas: R$ "+total)
}
else{
    let total = kilos * 50
    console.log("Total de vendas: R$ "+total)
}

/*atividadeKilos()
function atividadeKilos(){

let kilos = parseInt(prompt("DIgite a quantidade de Kilos: "))

let total = kilos * 50

if(kilos > 100){
    total = kilos * 55.90
}

console.log("Total de vendas: R$ "+total)
}
*/
