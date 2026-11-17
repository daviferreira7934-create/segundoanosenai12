const prompt = require("prompt-sync")()

let produtos = [
    {nome: "Arroz", preço: 12.99},
    {nome: "Feijão", preço: 3.99},
    {nome: "Canjica", preço: 1.98}
]

const procura = prompt("Digite o produto que você quer procurar: ")
let achou = null

for(let i = 0; i<produtos.length;i++){
    if(procura === produtos[i].nome){
        achou = {nome: produtos[i].nome, preço: produtos[i].preço}
    }
}

if(achou != null){
    console.log("Produto Achado!!")
    console.log(`Nome: ${achou.nome}`)
    console.log(`Preço: R$${achou.preço}`)
}
else{
    console.log("Produto não achado na lista!!")
}


produtos.sort((a, b)=> a.preço - b.preço)
console.log("Do menor preço para o maior preço: ")
for(let i = 0; i < produtos.length; i++){
    console.log(`${produtos[i].nome} - ${produtos[i].preço}`)
}

produtos.sort((a, b)=> a.preço - b.preço)
console.log("Do maior preço para o menor preço: ")
for(let i = 0; i < produtos.length; i++){
    console.log(`${produtos[i].nome} - ${produtos[i].preço}`)
}