const primeiroNumero = 22;
const segundoNumero = 55;
const terceiroNumero = 117;

if (primeiroNumero > segundoNumero && primeiroNumero > terceiroNumero) {
  console.log(primeiroNumero);
} else if (primeiroNumero < segundoNumero && segundoNumero > terceiroNumero) {
  console.log(segundoNumero);
} else {
  console.log(terceiroNumero);
}
