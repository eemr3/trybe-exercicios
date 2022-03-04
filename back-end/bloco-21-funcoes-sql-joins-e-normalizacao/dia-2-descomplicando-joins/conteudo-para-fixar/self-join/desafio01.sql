-- Queremos saber o Nome das pessoas colaboradoras e suas respectivas gerências ( manager ) cujos departamentos ( department ) são diferentes.
SELECT emp.FIRST_NAME AS NOME_COLABORADOR, manag.FIRST_NAME AS NOME_GERENTE FROM hr.employees AS emp
INNER JOIN hr.employees AS manag
ON emp.MANAGER_ID = manag.EMPLOYEE_ID
WHERE emp.DEPARTMENT_ID <> manag.DEPARTMENT_ID;


-- solução do course
SELECT
    CONCAT(Employee.FIRST_NAME, " ", Employee.LAST_NAME) AS "Nome Pessoa Colaboradora",
    CONCAT(Manager.FIRST_NAME, " ", Manager.LAST_NAME) AS "Nome Gerente"
FROM
    employees AS Employee
INNER JOIN
    employees AS Manager ON Employee.MANAGER_ID = Manager.EMPLOYEE_ID
WHERE
    Employee.DEPARTMENT_ID <> Manager.DEPARTMENT_ID;