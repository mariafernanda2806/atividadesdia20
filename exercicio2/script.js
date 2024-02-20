//2.Escreva um programa que recebe três números e determina qual é o maior deles, usando if, else if e else.

var num1 = parseFloat(prompt("Digite o primeiro número: "));
var num2 = parseFloat(prompt("Digite o segundo número: "));
var num3 = parseFloat(prompt("Digite o terceiro número: "));

var maior;

if (num1 >= num2 && num1 >= num3) {
    maior = num1;
} else if (num2 >= num1 && num2 >= num3) {
    maior = num2;
} else {
    maior = num3;
}

alert("O maior número é: " + maior);


