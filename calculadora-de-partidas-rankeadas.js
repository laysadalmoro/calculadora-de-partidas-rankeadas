// variaveis 
//operadores
//laços de repetição
// estruturas de decisão
// função
// Objetivo: criar uma function que recebe como parametro
// a quantidade de vitoria e derrotas de um jogador
// depois disso retorne o resultado para uma variavel, o saldo de rankeadas
// que deve ser feito atraves do calculo (vitorias - derrotas)
// se vitorias for menor do que 10 = ferro 
// se vitorias for entre 11 e 20 = Bronze
// se vitorias for entre 21 e 50 = Prata
// se vitorias for entre 51 e 80 = Ouro
// se vitorias for entre 81 e 90 = Diamante
// se vitorias for entre 91 e 100 = Lendario 
// se vitorias igual a 101 = Imortal
// saida 
// ao final exibir o saldo.
// O heroi tem o saldo de {saldoVitorias} esta no nivel de {nivel}

let personagem = "Hinata"
let vitorias = 50
let derrotas = 30
let calculo

function resultadoDaPartida(vitorias, derrotas) {
    let resultadoTotal = vitorias - derrotas
    return resultadoTotal
}

calculo = resultadoDaPartida(vitorias, derrotas)

function nivelClassificador(calculo) {
    if (calculo < 10) {
        return "Ferro"
    } else if (calculo > 11 && calculo <= 20) {
        return "Bronze"
    } else if (calculo > 21 && calculo <= 50) {
        return "Prata"
    } else if (calculo > 51 && calculo <= 80) {
        return "Ouro"
    } else if (calculo > 81 && calculo <= 90) {
        return "Diamante"
    } else if (calculo > 91 && calculo <= 100) {
        return "Lendário"
    } else {
        return "Imortal"
    }
}

let resultadoNivelClassificador = nivelClassificador(calculo);

console.log("O heroi " + personagem + " tem saldo de vidas de " + calculo + " e está no nivel " + resultadoNivelClassificador);
