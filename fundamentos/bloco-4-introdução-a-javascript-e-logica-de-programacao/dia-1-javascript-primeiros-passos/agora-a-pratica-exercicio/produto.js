const custoProduto = 50;
const imposto = (custoProduto * 20) / 100;
const totalCustoProduto = custoProduto + imposto;
const valorVenda = 85;
const quatidadeVendida = 1000;
const totalLucroEmpresa = (valorVenda - totalCustoProduto) * quatidadeVendida;

console.log(totalLucroEmpresa);
