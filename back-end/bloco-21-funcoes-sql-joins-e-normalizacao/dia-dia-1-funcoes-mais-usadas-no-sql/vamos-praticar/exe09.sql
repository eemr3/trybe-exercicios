-- Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras ( IT_PROG ).
SELECT JOB_ID, AVG(SALARY) AS media_salario FROM employees
GROUP BY JOB_ID HAVING JOB_ID <> 'IT_PROG' ORDER BY media_salario DESC;
