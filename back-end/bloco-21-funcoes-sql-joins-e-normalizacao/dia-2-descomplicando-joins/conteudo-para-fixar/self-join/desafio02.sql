-- Exiba o Nome e a quantidade de pessoas lideradas de cada gerente.
SELECT man.FIRST_NAME as NOME_GERENTE, COUNT(*) FROM hr.employees AS man
INNER JOIN hr.employees AS emp
ON man.EMPLOYEE_ID = emp.MANAGER_ID
GROUP BY man.EMPLOYEE_ID;


-- solução do course
SELECT
    CONCAT(Manager.FIRST_NAME, " ", Manager.LAST_NAME) AS "Nome Gerente",
    COUNT(*)
FROM
    employees AS Manager
INNER JOIN
    employees AS Employee ON Employee.MANAGER_ID = Manager.EMPLOYEE_ID
GROUP BY
    Manager.EMPLOYEE_ID;