let listaDePecas = ['Filtro de Ar', 'Roda', 'Pneu']

listaDePecas.push ('Disco de Freio')
listaDePecas.push ('Motor')
listaDePecas.push ('Amortecedor')

if(listaDePecas.length < 10) {
    console.log("É possivel cadastrar mais peças!!!")
}
else{
    console.log("Não há mais espaço na caixa.")
}

let peso = 150
if(peso < 100){
    console.log("A peça deve pesar no mínimo 100g.")
} 
else{
    console.log("A peça possui o peso adequado.")
}

let nomePeca = 'Disco de Freio'
if (nomePeca.length > 3){
    console.log("O nome da peça está adequado para o cadastro.")
}
else if(nomePeca.length == 0){
    console.log("O nome da peça não pode ser vazio.")
}
else {
    console.log("O nome da peça deve ter mais de 3 caracteres, digite o nome adequado.")
}