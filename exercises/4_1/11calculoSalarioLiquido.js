//Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. 
//Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

let aliquotaINSS;
let aliquotaIR;

let grossSalary = 2000;

if(grossSalary <= 1556.94) {
    aliquotaINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
    aliquotaINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
    aliquotaINSS = grossSalary * 0.11;
} else {
    aliquotaINSS = 570.88;
}

let baseSalary = grossSalary - aliquotaINSS;

if (baseSalary <= 1903.98) {
    aliquotaIR = 0;
} else if(baseSalary <= 2826.65) {
    aliquotaIR = grossSalary * 0.075 - 142.80;
}

console.log("Salário: " + (baseSalary - aliquotaIR));

