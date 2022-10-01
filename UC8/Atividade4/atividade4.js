// Algoritmos para um sistema de cadastro

// Inserir data do evento

let data = 30/09/2022


switch (data) {
    case 30/09/2022: 
        console.log ('Data válida. Cadastro Permitido')   
        break;     

default:
    console.log ('Cadastro não permitido. Data inválida. Deseja inserir nova data?')   
        break;
}
//Informe a idade do participante

let idade = 22 

if (idade >= 18) {
console.log ('Idade aceita')
}

else if (idade < 18) {
console.log ('Cadastro não concluído, pois a sua idade é inferior a 18 anos.')
}

// Listar participantes para o evento
 let participantesEvento = []

participantesEvento.push('Gioavana')
participantesEvento.push('Pedro')
participantesEvento.push('Miguel')
participantesEvento.push('Gabriel')
participantesEvento.push('Juliana')
participantesEvento.push('Marcelo')
participantesEvento.push('Amanda')
participantesEvento.push('Talita')
participantesEvento.push('Paula')
participantesEvento.push('Gabrielle')

console.log("Número de participantes são: " + participantesEvento.length)
console.log(participantesEvento)

// Limite de participantes para o evento

let participantes = 87

if (participantes < 100){
    console.log("Cadastro Liberado")
}
else if (participantes >= 100){
    console.log ("Limite de participantes excedido!")
}