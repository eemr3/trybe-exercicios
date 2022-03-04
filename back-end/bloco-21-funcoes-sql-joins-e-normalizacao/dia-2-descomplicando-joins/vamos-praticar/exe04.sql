-- Exercício 4: Utilizando o LEFT JOIN , faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
SELECT `name`, `location`, title, director, `year`, length_minutes FROM Pixar.Theater AS th
LEFT JOIN Pixar.Movies AS mov
ON th.id = mov.theater_id
ORDER BY th.name ASC;

SELECT
    t.name,
    t.location,
    m.title,
    m.director,
    m.year,
    m.length_minutes
FROM
    Pixar.Theater t
        LEFT JOIN
    Pixar.Movies m ON t.id = m.theater_id
ORDER BY t.name;