## SELECT , o primeiro passo

Antes da aula a seguir, temos dois conceitos importantes que podem ser utilizados já no início do seu aprendizado de SQL . Esses conceitos são usar o SELECT para gerar valores e usar o AS para dar nomes às suas colunas, como nos exemplos a seguir. Rode cada um deles em uma janela de query para verificar os resultados:
```bash
SELECT 'Olá, bem-vindo ao SQL!';
SELECT 10;
SELECT now();
SELECT 20 * 2;
SELECT 50 / 2;
SELECT 18 AS idade;
SELECT 2019 AS ano;
SELECT 'Rafael', 'Martins', 25, 'Desenvolvedor Web';
SELECT 'Rafael' AS nome, 'Martins' AS sobrenome, 25 AS idade, 'Desenvolvedor Web' AS 'Área de atuação';
```

### Já vamos praticar? Aham!
- Monte uma query que exiba seu nome na tela;
  ```bash
    SELECT 'Emerson' AS first_name;
  ```
- Monte uma query que exiba seu nome, sobrenome, cidade natal e idade na tela;
  ```bash
  SELECT 'Emerson', 'Moreira', 'Sobradinho-DF', 45;
  ```
- Monte uma query que, além de exibir todas as informações já mencionadas, identifique cada coluna usando o AS , que é chamado de 
alias na linguagem SQL ( alias é como um apelido no português);
  ```bash
  SELECT 'Emerson' AS first_name, 'Moreira' AS last_name, 'Sobradinho-DF' AS city, 45 AS age;
  ```
- Qual é o resultado de 13 * 8 ? Descubra usando apenas o SELECT ;
  ```bash 
  SELECT 13 * 8; 
  ``` 
- Monte uma query que exiba a data e hora atuais. Dê a essa coluna o nome "Data Atual".
  ```bash 
  SELECT now() AS 'Data atual';
  ``` 

### Tranquilo, não é? Então vamos fixar isso?

Vamos agora entrar no banco de dados sakila e encontrar as seguintes informações, montando uma query para cada uma:
  
  Posso usaro comando ``` USE nome-do-banco ``` ou ``` nome-do-banco.nome-da-tabela ``` para se trabalhar.

  - Escreva uma query que selecione todas as colunas da tabela city ;
    ```bash
    SELECT * FROM sakila.city;
    ```

  - Escreva uma query que exiba apenas as colunas first_name e last_name da tabela customer ;
    ```bash
    SELECT first_name, last_name FROM sakila.customer;
    ```

  - Escreva uma query que exiba todas as colunas da tabela rental ;
    ```bash
      SELECT * FROM sakila.rental;
    ```

  - Escreva uma query que exiba o título, a descrição e a data de lançamento dos filmes registrados na tabela film ;
    ```bash
    SELECT title, description, release_year FROM sakila.film;
    ```

  - Utilize o SELECT para explorar todas as tabelas do banco de dados.
    ```bash
    SELECT * FROM sakila.actor;
    SELECT * FROM sakila.address;
    SELECT * FROM sakila.category;
    SELECT * FROM sakila.film_actor;
    ```