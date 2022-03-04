-- Escreva uma query que exiba o sobrenome e a data de contratação de todos os funcionário contratados em julho de 1987.
SELECT LAST_NAME, HIRE_DATE FROM employees
WHERE YEAR(HIRE_DATE) = 1987 AND MONTH(HIRE_DATE) = 7;