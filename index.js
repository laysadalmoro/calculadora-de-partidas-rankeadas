//variaveis 
//operadores 
//laços de repetição - estruturas de decisão
//Objetivos: Crie uma variável para armazenar
//o nomee a quantidade de xp de um heroi, depois utilize
// uma estrutura de repetição para representar as mensagens abaixo
// se for - 1000 = ferro
// se for 1001 a 2000 = bronze
// se for  2001 a 5000 = prata
// se for 6001 a 7000 = ouro
// se for 7001 a 8000 = platina
// se for 8001 a 9000 = ascendente
// se for 9001 a 10000 = imortal
// se for igual ou + a 10001 = radiante
// saida deve ter O heroi de nome --- está no nivel ---

let nomeHeroi = "Saitama"
let xpHeroi = 11000

if (xpHeroi <= 1000){
    console.log( nomeHeroi + ", seu nível é Ferro! Sua pontuação total é: " + xpHeroi)
}
else if (xpHeroi > 1001 && xpHeroi <= 2000){
    console.log (nomeHeroi + ", seu nível é Bronze! Sua pontuação total é: " + xpHeroi)
}
else if(xpHeroi > 2001 && xpHeroi <= 5000){
    console.log (nomeHeroi + ", seu nível é Prata! Sua pontuação total é: " + xpHeroi)
}
else if(xpHeroi > 6001 && xpHeroi <= 7000){
    console.log (nomeHeroi + ", seu nível é Ouro! Sua pontuação total é: " + xpHeroi)
}
else if(xpHeroi > 7001 && xpHeroi<= 8000){
    console.log (nomeHeroi + ", seu nível é Platina! Sua pontuação total é: " + xpHeroi)
}
else if(xpHeroi > 8001 && xpHeroi <= 9000){
    console.log (nomeHeroi + ", Seu nível é Ascendente! Sua pontuação total é: " + xpHeroi)
}
else if(xpHeroi > 9001 && xpHeroi <= 10000){
    console.log (nomeHeroi + ", Seu nível é Imortal! Sua pontuação total é: " + xpHeroi)
}
else {
    console.log (nomeHeroi + ", Seu nível Radiante!! Sua pontuação total é: " + xpHeroi)
}