let nome1 = "Conrado"; let nome2 = "Pedrita"
let idade1 = 15; let idade2 = 19
let cafes_tomado1 = 187; let cafes_tomado2 = 5
let cafes_total = cafes_tomado1 + cafes_tomado2 
let t = true; let f = false
let cafe_200_1 = 200 - cafes_tomado1; let cafe_200_2 = 200 - cafes_tomado2
let preco_cafe = 3.50; let desconto = preco_cafe 
let cafes_comprados1 = 15; cafes_comprados2 = 3
let cafe_total1 = cafes_comprados1 + cafes_tomado1
let cafe_total2 = cafes_comprados2 + cafes_tomado2
let gasto_cafe2 = cafe_total2 * preco_cafe 
let gasto_cafe1 = cafes_total1 * preco_cafe

console.log("Olá \nBem-vindo ao sistema de usuários dp Conradito \nAbaixo estão ass informações dos usuários cadastrados no sistema \n")


console.log("Lista de usuários:")
console.log("- Nome: "+nome1+ " idade "+idade1+" É cliente "+ f)
console.log("- Nome: "+nome2+ " idade "+idade2+" É cliente "+ t+"\n")

console.log("Quantidade de cafés:")
console.log(" O cliente "+nome1 + " ja tomou "+ cafes_tomado1+ " cafés!")
console.log(" O cliente "+nome2 + " ja tomou "+ cafes_tomado2+ " cafés!\n")

console.log("Soma de cafés tomados:")
console.log("Juntos, os clientes "+nome1+ " e" + nome2+ " tomaram "+ cafes_total+ " cafés! \n")


console.log("Quantos cafés falta para chegar em 200?")
console.log("Faltam "+ cafe_200_1+ " para "+ nome1)
console.log("Faltam "+ cafe_200_2+ " para "+ nome2+ "\n")


console.log("\n"+ "Novas vendas: "+nome1+ " comprou "+ cafes_comprados1+ " novos cafés e " + nome2 + " "+ cafes_comprados2 +"\n")

console.log(nome1+ " desenbolsou R$ "+ gasto_cafe1+ " na cafeteria" + " e " + nome2 + " R$ "+ gasto_cafe2+ "\n")
