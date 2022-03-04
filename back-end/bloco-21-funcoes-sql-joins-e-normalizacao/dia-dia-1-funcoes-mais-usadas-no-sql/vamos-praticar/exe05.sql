-- Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais.
SELECT ROUND(MAX(SALARY), 2) AS maior_salario, ROUND(MIN(SALARY), 2) AS menor_salario, ROUND(SUM(SALARY), 2) AS total_salrio, ROUND(AVG(SALARY), 2) AS media_salario
FROM employees; 