//Escreva um programa que se inicie com dois valores em duas variáveis diferentes: 
//o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto 
//de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender 
//mil desses produtos.

//Atente que, sobre o custo do produto, incide um imposto de 20%.

//Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos 
//seus valores de entrada seja menor que zero.

let custoDoProduto = 100;
let valorDeVenda = 130;

if( custoDoProduto > 0 && valorDeVenda > 0){
    let lucroLiquido = (valorDeVenda - custoDoProduto) * (1 - 0.2);
    console.log('Lucro luquido = ' + 1000 * lucroLiquido);
} else {
    console.log("Mensagem de Erro")
}