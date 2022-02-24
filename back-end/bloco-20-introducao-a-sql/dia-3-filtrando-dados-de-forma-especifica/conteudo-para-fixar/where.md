## Entregando resultados mais exatos através do WHERE
Sakila mode ON! Vamos abrir nosso banco de dados sakila e aprender a lidar com o WHERE e com os principais comparadores lógicos:
PS: Além da informação passada no vídeo, é importante relembrar a precedência dos operadores .

<p>
  <img src="ordemDeOperadores.png">
</p>

Sendo assim, quando se faz a seguinte query :
  ```bash
  SELECT * FROM sakila.payment
  WHERE amount = 0.99 OR amount = 2.99 AND staff_id = 2;
  ```
  Como o operador AND tem preferência sobre o operador OR , ele é avaliado primeiro. Então os registros buscados são aqueles nos quais amount = 2.99 e staff_id = 2 . Na sequência, são buscados os registros nos quais amount = 0.99 , independente do valor de staff_id . Os valores retornados serão os resultados dessas duas buscas. Ou seja, a query é executada como se tivesse os seguintes parênteses: amount = 0.99 OR (amount = 2.99 AND staff_id = 2) .

Agora, quando executar a seguinte query :
  ```bash
  SELECT * FROM sakila.payment
  WHERE (amount = 0.99 OR amount = 2.99) AND staff_id = 2;
  ```
  Primeiramente, a expressão dentro dos parênteses é avaliada, e todos os resultados que satisfazem a condição amount = 0.99 OR amount = 2.99 são retornados. Na sequência, a expressão do lado direito do AND é avaliada, e todos os resultados que satisfazem a condição staff = 2 são retornados. O AND então compara o resultado de ambos os lados e faz com que somente os resultados que satisfazem ambas as condições sejam retornados.

  Como foi exibido no vídeo acima, de forma geral, temos os seguintes operadores:
  ```bash
    -- OPERADOR - DESCRIÇÃO
    =   IGUAL
    >   MAIOR QUE
    <   MENOR QUE
    >=  MAIOR QUE OU IGUAL
    <=  MENOR QUE OU IGUAL
    <>  DIFERENTE DE
    AND OPERADOR LÓGICO E
    OR  OPERADOR LÓGICO OU
    NOT NEGAÇÃO
    IS  COMPARA COM VALORES BOOLEANOS (TRUE, FALSE, NULL)
  ```

Depois de ter assistido ao vídeo anterior, você já deve ter agora uma noção do que pode ser feito com os operadores do SQL e de como é possível combiná-los para trazer relatórios ainda mais granulares. Vamos buscar algumas informações no nosso banco de dados para consolidar esse aprendizado.
Dica final: Sempre se atente a essa ordem de precedência para que consiga montar suas queries de acordo com o que precisa. Na dúvida, use parênteses.

## Para Fixar
A tabela a seguir é um guia de como a classificação indicativa é usada no banco de dados sakila . Consulte-a ao fazer os desafios propostos.
G = permitido para todos
PG = permitido para crianças menores de 13 anos
PG-13 = permitido para pessoas com mais de 13 anos
R = permitido para pessoas com mais de 17 anos
NC-17 = permitido apenas para adultos

Entre no banco de dados sakila e siga as instruções (e guarde as queries para conferir posteriormente):

  - Precisamos identificar os dados do cliente com o e-mail LEONARD.SCHOFIELD@sakilacustomer.org . As informações podem ser encontradas na tabela customer
  ```bash
    SELECT 	* FROM sakila.customer
    WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';
  ```
  
  - Precisamos de um relatório dos nomes dos clientes, em ordem alfabética , que não estão mais ativos no nosso sistema e pertencem à loja com o id = 2 , e não inclua o cliente KENNETH no resultado. As informações podem ser encontradas na tabela customer
  ```bash
    SELECT first_name FROM sakila.customer
    WHERE active =  FALSE AND store_id = 2 AND first_name <> 'KENNETH';
  ```
  
  - O setor financeiro quer saber título, descrição, ano de lançamento e valor do custo de substituição ( replacement_cost ), dos 100 filmes com o maior custo de substituição, do valor mais alto ao mais baixo, entre os filmes feitos para menores de idade e que têm o custo mínimo de substituição de $18,00 dólares. Em caso de empate, ordene em ordem alfabética pelo título. As informações podem ser encontradas na tabela film
  ```bash
    SELECT title, description, release_year, replacement_cost FROM sakila.film
    WHERE replacement_cost >= 18 AND rating = 'G' || 'PG' || 'PG-13'
    ORDER BY replacement_cost DESC, title LIMIT 100;

    or

    SELECT title, description, release_year, replacement_cost FROM sakila.film
    WHERE replacement_cost >= 18 AND rating <> 'NC-17'
    ORDER BY replacement_cost DESC, title LIMIT 100;
  ```

  - Quantos clientes estão ativos e na loja 1 ? As informações podem ser encontradas na tabela customer
  ```bash
    SELECT COUNT(*) AS quantidade_ativos FROM sakila.customer
    WHERE active = 1 AND store_id = 1;
  ```
  - Mostre todos os detalhes dos clientes que não estão ativos na loja 1 . As informações podem ser encontradas na tabela customer
  ```bash
    SELECT * FROM sakila.customer
    WHERE active = FALSE AND store_id = 1;
  ```

  - Precisamos descobrir quais são os 50 filmes feitos apenas para adultos com a menor taxa de aluguel, para que possamos fazer 
  uma divulgação melhor desses filmes. Em caso de empate, ordene em ordem alfabética pelo título. As informações podem ser encontradas na tabela film
  ```bash
    SELECT title FROM sakila.film
    WHERE rating = 'NC-17' ORDER BY rental_rate, title LIMIT 50;
  ```
Você vai se deparar também com casos em que você só tem parte de uma informação, ou em que precisa criar queries mais dinâmicas. Para esses casos, temos o LIKE . Como assim? É o que veremos a seguir.