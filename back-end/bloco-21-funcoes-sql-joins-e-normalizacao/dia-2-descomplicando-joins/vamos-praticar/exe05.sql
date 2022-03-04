-- Exercício 5: Utilizando o RIGHT JOIN , faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
SELECT th.id, th.name, th.location, mov.id, mov.title, mov.director, mov.year, mov.length_minutes  FROM Pixar.Movies AS mov
RIGHT JOIN Pixar.Theater AS th
ON th.id = mov.theater_id
ORDER BY th.name ASC;