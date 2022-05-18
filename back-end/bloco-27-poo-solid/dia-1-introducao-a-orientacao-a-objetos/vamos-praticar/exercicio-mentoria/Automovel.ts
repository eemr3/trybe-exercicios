class Automovel {
  modelo: string = '';
  marca: string = '';
  portas: number = 4;
  acessorios: Array<string> = [];
  price: number = 0;
  velocidade: number = 0;
  categoria: 'hatch' | 'sedan' = 'hatch';
}

const automove1 = new Automovel();
console.log(automove1);
