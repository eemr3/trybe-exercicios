const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

/* 1 - Crie uma função para adicionar o turno da noite na lesson2.Essa função deve possuir três parâmetros, 
sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela. */

function addTurn(obj, key, value) {
  return obj[key] = value;
}

addTurn(lesson2, 'turno', 'noite');
// console.log(lesson2)

/* 2 - Crie uma função para listar as keys de um objeto.Essa função deve receber um objeto como parâmetro. */
function listKeyObect(params) {
  return Object.keys(params);
}

// console.log('Lista das chaves do objeto => ', listKeyObect(lesson1));

/* 3 - Crie uma função para mostrar o tamanho de um objeto. */
function lengthObject(params) {
  return Object.entries(params).length;
}

// console.log(`Tamano do objeto é => ${lengthObject(lesson2)}`);

/* 4 - Crie uma função para listar os valores de um objeto.Essa função deve receber um objeto como parâmetro. */
function listValuesObject(params) {
  return Object.values(params);
}

// console.log(`Valores do objeto => `, listValuesObject(lesson3));

/* 5 - Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign.Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3.Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte: */


const allLessons =  Object.assign({lesson1:lesson1, lesson2:lesson2, lesson3:lesson3});

// console.log(allLessons)

/* 6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas. */
function totalStudant(params) {
  let total = 0;
  
  for (const key in params) {
    total += params[key].numeroEstudantes;
  }

  return console.log(`Total de alunos: ${total}`)
}

// totalStudant(allLessons)

/* 7 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.Por exemplo: */
function getPositionInObject(obj, position) {
  const valuePosition = Object.values(obj)[position];

  return valuePosition;
}

// console.log(getPositionInObject(lesson1, 0))

/* 8 - Crie uma função que verifique se o par(chave / valor) existe na função.
Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.*/
function verifyPair(obj, chave, value) {
  let verify = false;

  for (const key in obj) {
    
    if (key === chave && obj[key] === value) {
      verify = true;
    }else {
      verify = false;
    }
  }  
  return verify;
}

// console.log(verifyPair(lesson3, 'turno', 'noite'));

// console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));

// BONUS
/* 1 - Crie uma função para contar quantos estudantes assistiram às aulas de Matemática.Use o objeto criado no exercício 5. */

/* 
{
  lesson1:
  {
    materia: 'Matemática',
      numeroEstudantes: 20,
        professor: 'Maria Clara',
          turno: 'manhã'
  },
  lesson2:
  {
    materia: 'História',
      numeroEstudantes: 20,
        professor: 'Carlos',
          turno: 'noite'
  },
  lesson3:
  {
    materia: 'Matemática',
      numeroEstudantes: 10,
        professor: 'Maria Clara',
          turno: 'noite'
  }
}; 
*/
function totalStudantPerSubject(params) {
  let totalStudant = 0;
  for (const key in params) {
    if (params[key].materia.includes('Matemática')){
      totalStudant += params[key].numeroEstudantes;
    } 
  }
  return console.log(totalStudant);
  
}

// totalStudantPerSubject(allLessons);

/* 2 - Crie uma função que deverá retornar um objeto que representa o 
relatório do professor ou professora, as aulas que ele ou ela ministrou e o 
número total de estudantes.Use o objeto criado no exercício 5: */
function teacherReport(obj, teacher) {
  const objectTeacherReport = {};
  const subject = [];
  for (const key in obj) {
    if (obj[key].professor === teacher){
      objectTeacherReport["professor"] = obj[key].professor;
      subject.push(Object.values(obj)[0].materia);
      objectTeacherReport["aulas"] = subject;
      objectTeacherReport["estudantes"] = obj[key].numeroEstudantes + obj[key].numeroEstudantes;
    }
  }
  
  return console.log(objectTeacherReport)
}

teacherReport(allLessons, 'Maria Clara')
