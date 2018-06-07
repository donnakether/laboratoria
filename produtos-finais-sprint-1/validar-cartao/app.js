//My try for Luhn Algorithm
// Crie um site que solicite, por meio de um prompt(), o número de um cartão de crédito e confirme sua validade de acordo com o algoritmo de Luhn
// módulo 10
// Uma função chamada isValidCard.
// Validação de entrada: O usuário não deve ser capaz de inserir um campo vazio.
// 
// Colocar os números em um array em ordem inversa.
//To Do:

//1. Perguntar o número do cartão de crédito.
//2. Passar os números para um array com a ordem inversa.
//3. Aplicar a operação aos números de posições pares.
//4. Somar os dígitos e novos dígitos.
//5. Comprovar se é uma tarjeta válida.

//TIPS
// - 9 = somar os digitos depois de multiplicar as posições pares por 2.

//var cardNumber = prompt("Insira o número do cartão de crédito.");
var str = "uma string"
console.log(str.length-1);
console.log(str.charAt(3));
console.log(str);
var cardNumber = "4567 7890 0987 6789";
//var arrNum = cardNumber.split("");
//console.log(arrNum);
function isValidCard(num) {
    var arrNum = num.split(' ').join('').split('').reverse(); 
    console.log(arrNum);
    var even = [];
    var sum = 0;
    
    for (var i = 0; i < arrNum.length; i++) {
        
        if (arrNum[i]%2 === 0) {
            if (arrNum[i]*2 > 9)
              even.push(arrNum[i]*2 -9);
            else {
              even.push(arrNum[i]*2);
            }
        }

        if (arrNum[i]%2 === 1) {
          even.push(arrNum[i]);
        }
        
    }
    for (var j = 0; j < even.length; j++) {
        sum += j;
    }
    var result = sum%10;
    
console.log(even);
console.log(result);
};
isValidCard(cardNumber);