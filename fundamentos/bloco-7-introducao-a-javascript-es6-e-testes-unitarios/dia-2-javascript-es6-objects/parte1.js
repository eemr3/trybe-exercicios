const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  /* Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11 - 98763 - 1416, R.Rua das Flores, Nº: 389, AP: 701 */

  const resultData = Object.values(order)
  const delivery = Object.values(resultData[3]);
  const info = `Olá ${delivery[2].deliveryPerson}, entrega para: ${resultData[0]}, Telefone: ${resultData[1]}`
  const resultDataAddress = Object.values(resultData[2]);
  
  const address = `R. ${resultDataAddress[0]}, Nº ${resultDataAddress[1]}, AP: ${resultDataAddress[2]}.`;
  const complete = `${info}, ${address}`

  return console.log(complete)

}

customerInfo(order);

console.log('\n--------------------------------------------------------------------------\n')
/* Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
Modifique o nome da pessoa compradora.
Modifique o valor total da compra para R$ 50, 00. */
const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const response = Object.values(order.order.delivery)[1] = 'Luiz Silva';
  const pizzas = Object.keys(order.order.pizza);
  const drinks = Object.entries(order.order.drinks)
  const payment = Object.values(order.payment)[0] = '50';
  
  console.log(`Olá ${response}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drinks[0][1].type} é R$ ${payment},00.`);
}

orderModifier(order);