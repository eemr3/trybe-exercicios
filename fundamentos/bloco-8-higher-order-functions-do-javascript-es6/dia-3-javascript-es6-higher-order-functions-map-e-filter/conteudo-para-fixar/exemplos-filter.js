const enviarEmail = (pessoaAprovada) => {
  const parte1 = `${pessoaAprovada.email}: Prabéns ${pessoaAprovada.nome}`;
  const mensagem = `${parte1} sua nota foi ${pessoaAprovada.nota}`;
  return console.log(mensagem);
}

listaPessoasAprovadas = [
  {nome: 'Jerry Mors', email: 'jerry.mors@gmail.com', nota: 51},
  {nome: 'Rabbit Jessica', email: 'rabit.jessica@gmail.com', nota: 101},
  {nome: 'Ada Lovelace', email: 'ada.lovelaces@gmail.com', nota: 150},
  {nome: 'Bruno Gomes', email: 'bruno.gomes@gmail.com', nota: 0},
  {nome: 'Augustina Vagas', email: 'agustina.vagas@gmail.com', nota: 101},
  {nome: 'Daniel Lopes', email: 'daniel.lopes@gmail.com', nota: 50},
  {nome: 'Emiliando Gorgozolla', email: 'emiliano.gorgozolla@gmail.com', nota: 150},
  {nome: 'Carla Marcia Leão', email: 'carla.leao@gmail.com', nota: 100},
]

const pessoasFiltradas = listaPessoasAprovadas.filter((pessoa) => pessoa.nota >= 100);

// pessoasFiltradas.forEach(pessoa => enviarEmail(pessoa));


const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.filter(verifyEven);

// console.log(isEven); // [ 30, 22 ]

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.filter((number) => number % 2 === 0);

// console.log(isEven2); // [ 30, 22 ]


const objPeople = [
  { name: 'José', age: 21 },
  { name: 'Lucas', age: 19 },
  { name: 'Maria', age: 16 },
  { name: 'Gilberto', age: 18 },
  { name: 'Vitor', age: 15 },
];

const verifyAgeDrive = (arrayOfPeople) => (
  arrayOfPeople.filter((people) => (people.age < 18))
);

// console.log(verifyAgeDrive(objPeople));  

const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const removeStudentByName = (name, listStudents) =>
  listStudents.filter((student) => student !== name);
  // Filtra todos os estudantes que não têm o nome 'Ricardo' e retorna um array com eles. Na prática, remove o Ricardo do array.

const newListStudents = removeStudentByName('Ricardo', arrayMyStudents);
console.log(newListStudents); 
