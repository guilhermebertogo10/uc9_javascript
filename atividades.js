let prompt = require("prompt-sync")();




function atividadeNumero(){

    let numero = prompt("Digite um número: ") 
    
        if(numero < 0 ){
            console.log("Número negativo")
    
        }
        else{
            console.log("Número positivo")
        }
      
} 

atividadeCompra()
function atividadeCompra(){

    let valor_compra = prompt("Digite o valor da compra: ")
    let cartao = prompt("A compra será feita no crédito ou débito ? ")

    let credito = (valor_compra * 5) / 100 
    let debito = (valor_compra * 10) / 100
    let x = valor_compra = credito
    let y = valor_compra = debito
    
    if(valor_compra == "credito"){
        console.log("O valor da compra é: " + x)
        
    }
    else if(valor_compra == "debito"){
        console.log("O valor da compra é: "+ y)
    }
     
}

function atividadeCPF(){

    let cpf = prompt("Digite seu CPF: ")



}


    



