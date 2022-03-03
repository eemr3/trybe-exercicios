SELECT CURRENT_DATE(); -- YYYY-MM-DD
SELECT NOW(); -- YYYY-MM-DD HH:MM:SS
select DATEDIFF('2030-01-20', current_date());

select timediff('10:25:45', '11:00:00');

-- Usando a coluna replacement_cost (valor de substituição) vamos encontrar:
SELECT AVG(replacement_cost) FROM sakila.film; -- 19.984000 (Média entre todos registros)
SELECT MIN(replacement_cost) FROM sakila.film; -- 9.99 (Menor valor encontrado)
SELECT MAX(replacement_cost) FROM sakila.film; -- 29.99 (Maior valor encontrado)
SELECT SUM(replacement_cost) FROM sakila.film; -- 19984.00 (Soma de todos registros)
SELECT COUNT(replacement_cost) FROM sakila.film; -- 1000 registros encontrados (Quantidade)

SELECT AVG(rental_duration) AS 'Média de Duração' FROM sakila.film;
SELECT MIN(rental_duration) FROM sakila.film;
SELECT MAX(rental_duration) FROM sakila.film;
SELECT SUM(rental_duration) AS 'Tempo de Exibição Total' FROM sakila.film;
SELECT COUNT(*) AS 'Filmes Registrados' FROM sakila.film;