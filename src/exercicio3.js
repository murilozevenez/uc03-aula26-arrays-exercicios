//Mostre no console o segundo elemento do array itensDiversos, 
//criado acima, com a frase: "O segundo elemento do array itensDiversos é [ELEMENTO]."

let itensDiversos = ['Goiaba', '80', '""'];
let itemRemovido = itensDiversos.slice(1, -1)

console.log('Lista Original', itensDiversos)
console.log('O segundo elemento do array itensDiversos é: ', itemRemovido)