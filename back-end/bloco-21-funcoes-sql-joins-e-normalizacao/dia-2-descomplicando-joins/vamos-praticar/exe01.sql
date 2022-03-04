-- Exercício 1: Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales ) e internacionais ( international_sales ) de cada filme.
SELECT pm.title AS nome_filme, pb.domestic_sales AS vendas_nacional, pb.international_sales AS vendas_internacional FROM Pixar.Movies AS pm
INNER JOIN Pixar.BoxOffice AS pb
ON pm.id = pb.movie_id;