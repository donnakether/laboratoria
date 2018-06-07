# Laboratória Sprint I - Produtos Finais

# Validador de cartão de crédito

Sprint 1 - LABORATÓRIA - Produto final II - Validador de cartão de crédito utilizando algoritmo de Luhn.

## About/ Sobre

* Exercise for bootcamp *<laboratória>* 2018 
* Exercício para bootcamp *<laboratória>* 2018 - Validar cartão de crédito utilizando algoritmo de Luhn ou seja módulo 10. 

### Pseudocode / Pseudocódigo

Em português
===================

1. Recebe número do cartão de crédito através do prompt
2. Função isValidCard recebe a string de números através do parâmetro num
3. A var arrSum um array vazio pra receber os números em posições pares uma var sum = 0 para a soma final
4. Um If para confirmar se o campo está vazio - retorna prompt - Insira número válido
5. Uma variável com métodos slipt e join e split para array com método reverse
6. Um ciclo For para cada item do array reverso
7. Se a posição é par se multiplica por 2 e o produto é maior que 9 tem mais de dois dígitos, multiplica por 2 e retira 9 (é como somar os dois digitos) se é menor que 9 apenas multiplica por dois coloca através do método push no array arrSum.
8. Se a posição é ímpar apenas utiliza o método push para entrar no array arrSum
9. Ciclo for para cada item do arrSum retorna soma de todos os itens na variável sum.
10. Variável result sum%10
11. Se sum%10 igual 0 retorna true - alert cartão válido


## Running the tests

Ainda em implementação
var cardNumber = "número do cartão";
retorna true

## Authors

 * **Donna Kether** 

