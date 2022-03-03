-- Média de duração de filmes agrupados por classificação indicativa
SELECT rating, AVG(length)
FROM sakila.film
GROUP BY rating;

-- Valor mínimo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MIN(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Valor máximo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MAX(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Custo total de substituição de filmes agrupados por classificação indicativa
SELECT rating, SUM(replacement_cost)
FROM sakila.film
GROUP by rating;

SELECT active, COUNT(*) AS quantity FROM sakila.customer
GROUP by active;

SELECT store_id, active, COUNT(*) as quantity FROM sakila.customer
GROUP by active, store_id;

SELECT  rating, AVG(rental_duration) as duration FROM sakila.film
GROUP by rating  ORDER BY duration DESC;

SELECT district, COUNT(*) as quantity FROM sakila.address
GROUP by district order by quantity desc;