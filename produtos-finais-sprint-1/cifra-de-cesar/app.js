// My Try for Ceasar Cipher

// cifra de césar
// parâmetro de 33 espaços
// str.charCodeAt(index)
//c onverter string em números da tabela asc
// O programa deve ser capaz de criptografar e descriptografar letras maiúsculas e minúsculas. A fórmula para decifrar é: (x - n) % 26

// O código deve ser composto por 2 funções com os seguintes nomes: cipher e decipher
// O usuário não deve poder inserir um campo vazio ou que contenha números

// Texto original: ABCDEFGHIJKLMNOPQRSTUVWXYZ
// Texto codificado: HIJKLMNOPQRSTUVWXYZABCDEFG
// Letras maiúsculas ASCII 65 até 90
// Letras minúscula ASCII 97 até 122


var strInput = prompt("Digite uma frase para codificá-la");

//var strInput = "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz"; for test3 uncomment this line and comment prompt line

console.log("Mensagem de entrada");
console.log(strInput);

function cipher(str) {

    var output = "";

    if((str === '') || (typeof str === "number")){
        console.log("Campo inválido");
    }

    for (i = 0; i < str.length; i++) {
        var char = str[i];
        
        if ((char.charCodeAt(0) >= 65) && (char.charCodeAt(0) <= 90)) {
            //console.log(char);
            var code = char.charCodeAt(0) - 65;
            //console.log(code);
            output += String.fromCharCode(((code + 33) % 26) + 65);
        }

        if ((char.charCodeAt(0) >= 97) && (char.charCodeAt(0) <= 122)) {
            //console.log(char);
            var code = char.charCodeAt(0) - 97;
            output += String.fromCharCode(((code + 33) % 26) + 97);
        }
        // 32 = space on ASCII - return space.
        if (char.charCodeAt(0) === 32) {
            var code = char.charCodeAt(0);
            output += String.fromCharCode(code);
        }

    } 

	return output;

};


var strCiphered = cipher(strInput);


function decipher(str) {
    var output = "";
    for (i = 0; i < str.length; i++) {
        var char = str[i];
        
        if ((char.charCodeAt(0) >= 65) && (char.charCodeAt(0) <= 90)) {
            //console.log(char);
            var code = char.charCodeAt(0) + 65;
            //console.log(code);
            output += String.fromCharCode(((code - 33) % 26) + 65);
        }

        if ((char.charCodeAt(0) >= 97) && (char.charCodeAt(0) <= 122)) {
            //console.log(char);
            var code = char.charCodeAt(0) + 97;
            //console.log(code);
            output += String.fromCharCode(((code + 33) % 26) + 97);
        }
        // 32 = space on ASCII - return space.
        if (char.charCodeAt(0) === 32) {
            var code = char.charCodeAt(0);
            output += String.fromCharCode(code);
        }

    } 

	return output;

};

var test1 = cipher('');
var test2 = cipher(43);
var test3 = cipher("ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz")
document.write("Mensagem cifrada: " + cipher(strInput));
document.write("   Mensagem decifrada: " + decipher(strCiphered));
console.log([test1 === '', test2 === '', test3 === "HIJKLMNOPQRSTUVWXYZABCDEFG hijklmnopqrstuvwxyzabcdefg"]);
