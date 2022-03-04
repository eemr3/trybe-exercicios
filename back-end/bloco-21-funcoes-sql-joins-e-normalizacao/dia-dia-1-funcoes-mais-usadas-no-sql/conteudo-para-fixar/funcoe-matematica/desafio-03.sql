-- Utilizando o resultado anterior, responda à seguinte pergunta: temos lugares sobrando? Se sim, quantos?
SELECT if(220 MOD 18 = 0, 'Sim', 'Não') as lotado, 220 MOD 18 as 'lugares sobrando';

-- solucação do gabarito course
SELECT IF(220 MOD 12 = 0, 'NÃO', CONCAT('SIM, ', 220 MOD 12)) as 'lugares sobrando';