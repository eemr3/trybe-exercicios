-- Monte uma query que exiba o nome , sobrenome e a média de valor ( amount ) paga aos funcionários no ano de 2006. Use as tabelas payment e staff . Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.
SELECT stf.first_name, stf.last_name, AVG(pay.amount) AS media_pagamento FROM sakila.staff AS stf
INNER JOIN sakila.payment AS pay
WHERE YEAR(pay.payment_date) = '2006'
GROUP BY stf.first_name, stf.last_name;

-- solução do course
SELECT stf.first_name, stf.last_name, AVG(pay.amount) AS `Média de pagamento` FROM sakila.staff AS stf
INNER JOIN sakila.payment pay ON stf.staff_id = pay.staff_id
WHERE YEAR(pay.payment_date) = 2006
GROUP BY stf.staff_id;