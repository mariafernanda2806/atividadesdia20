//4.Crie um programa que recebe um número de 1 a 7 e imprime o dia da semana correspondente (1 - Domingo, 2 - Segunda, ..., 7 - Sábado).


var numero = parseInt(prompt("Digite um número de 1 a 7:"));

switch (numero) {
    case 1:
        alert("Domingo");
        break;
    case 2:
        alert("Segunda-feira");
        break;
    case 3:
        alert("Terça-feira");
        break;
    case 4:
        alert("Quarta-feira");
        break;
    case 5:
        alert("Quinta-feira");
        break;
    case 6:
        alert("Sexta-feira");
        break;
    case 7:
        alert("Sábado");
        break;
    default:
        alert("Número inválido. Por favor, digite um número de 1 a 7.");
}