-- Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e dia do mês no qual foi contratado (exiba somente o dia).
SELECT JOB_ID, FIRST_NAME, DAY(HIRE_DATE) FROM employees;