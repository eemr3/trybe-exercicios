-- Exercício 2: Utilizando o INNER JOIN , faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais ( international_sales ) do que vendas nacionais ( domestic_sales ).
SELECT title AS nome_filme, (pb.domestic_sales + pb.international_sales) AS vendas FROM Pixar.Movies as pm
INNER JOIN Pixar.BoxOffice as pb
ON pm.id = pb.movie_id
WHERE pb.international_sales > pb.domestic_sales;

SELECT
    m.title, 
    (b.domestic_sales + b.international_sales) AS "Vendas"
FROM
    Pixar.Movies m
        INNER JOIN
    Pixar.BoxOffice b ON b.movie_id = m.id
WHERE
    b.international_sales > b.domestic_sales;