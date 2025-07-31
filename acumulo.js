// Aculumlar valores em uma Variável

let personagem = "Mario"
let moedas = 0

console.log("Bem-vindo ao jogo")
console.log(personagem+": "+moedas+ " Moedas")

moedas = 1
console.log(personagem+": "+moedas+ " Moedas")


//moedas += 1
//moedas++
moedas = moedas + 1
console.log(personagem+": "+moedas+ " Moedas")

moedas ++
moedas ++
moedas += 5
moedas -= 2
moedas = moedas + 3
console.log(personagem+": "+moedas+" moedas")

moedas += 10
moedas = moedas / 2
moedas ++ // checkpoint
let salvamento = moedas
moedas = moedas *2 

console.log(personagem+": "+moedas+" moedas")

// MORREU
moedas = 0
console.log(personagem+": "+moedas+" moedas")

// REVIVEU
console.log(personagem+": "+moedas+" moedas")
console.log(salvamento)