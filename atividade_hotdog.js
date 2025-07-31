let salsicha = 3.50
let pure = 2.15
let salada = 1.90
let pao = 0.90
let batata = 0.50

let dog_simples = pao + batata + salsicha + pure
let dog_duplo = pao + batata + (salsicha*2) + pure + salada
let dog_especial = pao + batata + (salsicha*3) + pure *2 + salada


dog_simples = dog_simples.toFixed(2)
dog_duplo = dog_duplo.toFixed(2)
dog_especial = dog_especial.toFixed(2)

// toFixed(2) para mostrar apenas duas casas decimais

console.log("Cardápio do foodtruck:\nDog Simples: R$ "+dog_simples +"\n"+ "Dog Duplo: R$ "+ dog_duplo + "\n"+ "Dog Especial: R$ "+dog_especial)

