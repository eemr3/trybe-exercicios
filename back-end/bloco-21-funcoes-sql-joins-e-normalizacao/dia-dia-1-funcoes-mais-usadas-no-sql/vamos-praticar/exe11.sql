-- Escreva uma query que atualize a coluna PHONE_NUMBER , de modo que todos os telefones iniciados por 515 agora devem iniciar com 777 .
UPDATE hr.employees SET PHONE_NUMBER = REPLACE(PHONE_NUMBER, '515', '777')
WHERE PHONE_NUMBER LIKE('515%');

SELECT LEFT(PHONE_NUMBER, 3) FROM hr.employees WHERE PHONE_NUMBER LIKE('777%');