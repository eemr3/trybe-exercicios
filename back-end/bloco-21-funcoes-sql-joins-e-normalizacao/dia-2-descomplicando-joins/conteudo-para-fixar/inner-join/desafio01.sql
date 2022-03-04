-- Monte uma query que exiba o id do ator , nome do ator e id do filme em que ele já atuou usando as tabelas actor e film_actor .
SELECT act.actor_id, act.first_name, f.film_id FROM sakila.actor AS act
INNER JOIN sakila.film_actor AS f
ON act.actor_id = f.actor_id;
