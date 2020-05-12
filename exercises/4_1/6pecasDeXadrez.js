let peao = "peao";
let rainha = "rainha";

pecaDeXadrez = prompt("Digite uma peça de Xadrez:");


if(pecaDeXadrez === peao){
    document.write(peao + "Ok: esta peça anda para frente.");
}
else if(pecaDeXadrez === rainha){
    document.write(rainha + "Ok: Esta peça anda em todas as direções.");
}
else{
    document.write("Erro: Esta peça não está cadastrada.")
}

