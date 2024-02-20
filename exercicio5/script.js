//5.Escreva um programa que recebe o nome de um mês e imprime o número de dias daquele mês. Considere um ano não bissexto.


function numeroDiasMes(nomeMes) {
    nomeMes = nomeMes.toLowerCase(); 

    
    switch (nomeMes) {
        case 'janeiro':
        case 'março':
        case 'maio':
        case 'julho':
        case 'agosto':
        case 'outubro':
        case 'dezembro':
            return 31;
        case 'abril':
        case 'junho':
        case 'setembro':
        case 'novembro':
            return 30;
        case 'fevereiro':
            return 28; 
        default:
            return -1; 
    }
}


var nomeMes = prompt("Digite o nome do mês:");


var numeroDias = numeroDiasMes(nomeMes);
if (numeroDias !== -1) {
    alert("O mês de " + nomeMes + " tem " + numeroDias + " dias.");
} else {
    alert("Nome do mês inválido. Por favor, digite o nome de um mês válido.");
}