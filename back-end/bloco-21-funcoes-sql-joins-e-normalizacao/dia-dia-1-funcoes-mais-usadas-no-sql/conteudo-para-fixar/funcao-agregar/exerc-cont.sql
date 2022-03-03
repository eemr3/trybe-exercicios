SELECT rating, AVG(length) AS `nomes cadastrados`
FROM sakila.film
GROUP BY rating HAVING `nomes cadastrados` between 115.0 and  121.50 ORDER BY `nomes cadastrados` DESC;

SELECT rating, SUM(replacement_cost) AS total_replacement_cost
FROM sakila.film
GROUP by rating HAVING total_replacement_cost > 3950.50;