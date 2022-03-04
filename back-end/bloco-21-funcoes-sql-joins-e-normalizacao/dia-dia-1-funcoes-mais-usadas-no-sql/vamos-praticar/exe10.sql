-- Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. Dica: agrupe pelo department_id .
SELECT DEPARTMENT_ID, AVG(SALARY) media_salario, COUNT(JOB_ID) quantidade_funcionario FROM employees
GROUP BY DEPARTMENT_ID HAVING DEPARTMENT_ID > 10;