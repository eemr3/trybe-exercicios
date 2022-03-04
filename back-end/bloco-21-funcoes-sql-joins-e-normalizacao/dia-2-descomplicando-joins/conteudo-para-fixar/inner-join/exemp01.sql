/* SELECT t1.coluna, t2.coluna
FROM tabela1 AS t1
INNER JOIN tabela2 AS t2
ON t1.coluna_em_comum = t2.coluna_em_comum; */

-- SQL com erro de ambiguidade
SELECT sakila.actor.first_name, actor_id, sakila.film_actor.actor_id
FROM sakila.actor
INNER join film_actor
ON sakila.actor.actor_id = sakila.film_actor.actor_id;

-- SQL sem erro de ambiguidade por usar Alias AS
SELECT a.first_name, a.actor_id, f.actor_id
FROM sakila.actor AS a
INNER JOIN film_actor AS f
ON a.actor_id = f.actor_id;