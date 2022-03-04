-- Monte uma query que exiba o id do ator , nome , id do filme e título do filme , usando as tabelas actor , film_actor e film . Dica: você precisará fazer mais de um JOIN na mesma query .
SELECT a.actor_id, a.first_name, fa.film_id, f.title FROM sakila.actor a
INNER JOIN sakila.film_actor fa
ON a.actor_id = fa.actor_id
INNER JOIN sakila.film f
ON fa.film_id = f.film_id;