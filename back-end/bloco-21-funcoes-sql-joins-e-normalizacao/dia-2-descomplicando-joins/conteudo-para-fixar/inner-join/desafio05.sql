-- Exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordene seus resultados por nomes de forma decrescente. Exiba somente os clientes ativos. As informações podem ser encontradas na tabela address e customer .
SELECT cust.first_name, COUNT(adr.address) AS quantidade_endereco FROM sakila.customer AS cust
INNER JOIN sakila.address as adr
ON adr.address_id = cust.address_id
WHERE cust.active = 1
GROUP BY cust.customer_id
ORDER BY cust.first_name DESC, cust.last_name DESC;

SELECT COUNT(address) from sakila.address;

SELECT
    c.first_name, 
    COUNT(a.address) AS `quantidade de endereço`
FROM
    sakila.customer c
INNER JOIN 
    sakila.address AS a 
    ON a.address_id = c.address_id
WHERE
    c.active = 1
GROUP BY 
    c.customer_id
ORDER BY 
    first_name DESC, 
    last_name DESC;