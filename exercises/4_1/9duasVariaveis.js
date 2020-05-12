//Escreva um programa que defina três números em variáveis no seu começo e retorne true se uma das três for ímpar. Caso contrário, ele retorna false.

//Bonus: use somente um if.//

let num1 = 1;
let num2 = 5;
let num3 = 10;

let is0dd = false;

if (num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0){
    is0dd = true;
}

console.log(is0dd);
