-- Exiba o nome , email , id do endereço , endereço e distrito dos clientes que moram no distrito da California e que contêm "rene" em seus nomes. As informações podem ser encontradas nas tabelas address e customer .
SELECT cost.first_name, cost.email, cost.address_id, adr.address, adr.district FROM sakila.customer AS cost
INNER JOIN sakila.address adr
ON cost.address_id = adr.address_id
WHERE adr.district = 'California' and cost.first_name LIKE('%rene%');