-- Exercício 3: Utilizando o INNER JOIN , faça uma busca que retorne os filmes e sua avaliação ( rating ) em ordem decrescente.
SELECT mov.title, bx.rating FROM Pixar.Movies AS mov
INNER JOIN Pixar.BoxOffice AS bx
ON mov.id = bx.movie_id
ORDER BY bx.rating DESC;