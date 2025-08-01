let prompt = require("prompt-sync")();


atividadeNumero()
function atividadeNumero(){

    let numero = prompt("Digite um número: ") 
    
        if(numero < 0 ){
            console.log("Número negativo")
    
        }
        else{
            console.log("Número positivo")
        }
      
} 


compra()
function compra(){

    let valor = (prompt("Digite o valor da compra: "))
    let pagamento = prompt("A compra será no crédito ou débito? ")
    
    let credito = valor * 1.05
    let debito = valor * 0.90
    
    if (pagamento == "credito") {
      console.log("Total no crédito: R$ " + credito)
    } 
    else if (pagamento == "debito") {
      console.log("Total no débito: R$ " + debito)
    }
    
    }
    
    
    validarCPF()
    function validarCPF(){
    
        let cpf = prompt("Digite o CPF: ")
    
        if(cpf.length == 11){
            console.log("CPF válido")
        }
        else {
            console.log("CPF inválido")
        }
    
    }
    
    
    numeros()
    function numeros(){
    
        let numero1 = parseInt(prompt("Digite o primerio número: "))
        let numero2 = parseInt(prompt("Digite o segundo número: "))
    
        let total = numero1 + numero2
        
        if(total > 50){
            console.log("A Soma é maior que 50. O novo valor é: "+ (total +10))
        }
        else{
            console.log("A Soma é 50 ou menor. O novo valor é: "+ (total - 20))
        }
    
    
    }
    
    
    crescente()
    function crescente(){
    
        let n1 = parseInt(prompt("Digite o primerio número: "))
        let n2 = parseInt(prompt("Digite o segundo número: "))
    
        if(n1 < n2){
            console.log(" Ordem crescente \n"+ n1 +"\n"+ n2)
        }
        else{
            console.log("Ordem decrescente \n"+ n2 +"\n"+ n1)
        }
    
    }
    





