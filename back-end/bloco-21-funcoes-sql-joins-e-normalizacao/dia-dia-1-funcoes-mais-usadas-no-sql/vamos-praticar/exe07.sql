-- Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão ( JOB_ID ).
SELECT JOB_ID, SUM(SALARY) AS total_salario_a_pagar FROM employees
GROUP BY JOB_ID;