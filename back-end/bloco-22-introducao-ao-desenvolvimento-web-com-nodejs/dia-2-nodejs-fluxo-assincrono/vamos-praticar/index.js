// 3 de abril de 2019
let d = new Date(2019, 3, 3); // ou new Date() para a data atual
// somar 1 dia = 4 de abril de 2019
console.log(d.setDate(d.getDate() + 1));

function adicionarDiasData(dias) {
  var hoje = new Date();
  var dataVenc = new Date(hoje.getTime() + dias * 24 * 60 * 60 * 1000);
  return (
    dataVenc.getDate() +
    "/" +
    (dataVenc.getMonth() + 1) +
    "/" +
    dataVenc.getFullYear()
  );
}

var novaData = adicionarDiasData(5);

console.log(novaData);
