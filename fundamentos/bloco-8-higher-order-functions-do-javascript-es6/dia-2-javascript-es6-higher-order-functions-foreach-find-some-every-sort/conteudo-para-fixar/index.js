// Array contendo a lista de emails.
const emailList = [
  "isa@myemail.com",
  "lipe@myemail.com",
  "digo@myemail.com",
  "greg@myemail.com",
];

const submitEmails = () => {
  const containerEmails = document.querySelector('#email-list');
  emailList.forEach(email => {
    const listTagP = document.createElement('li');
    listTagP.innerHTML = `${email}: email enviado com sucesso!`;
    containerEmails.appendChild(listTagP);
  });
};

const btnGenerteSendEmail = document.querySelector('#btn-filter');
btnGenerteSendEmail.addEventListener('click', submitEmails);