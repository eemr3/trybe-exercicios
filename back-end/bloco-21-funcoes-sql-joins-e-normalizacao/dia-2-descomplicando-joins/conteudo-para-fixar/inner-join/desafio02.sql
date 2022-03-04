--  Use o JOIN para exibir o nome , sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address .
SELECT stf.first_name, stf.last_name, adr.address FROM sakila.staff AS stf
INNER JOIN sakila.address AS adr 
ON stf.address_id = adr.address_id;