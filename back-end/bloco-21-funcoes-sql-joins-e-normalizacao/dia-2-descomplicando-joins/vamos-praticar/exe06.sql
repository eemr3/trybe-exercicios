-- Exercício 6: Utilizando o INNER JOIN , selecione todas as informações dos filmes com avaliação maior que 8.
SELECT id, title, director, year, length_minutes, bx.rating FROM Pixar.Movies AS mov
INNER JOIN Pixar.BoxOffice AS bx
ON mov.id = bx.movie_id
WHERE bx.rating > 8;