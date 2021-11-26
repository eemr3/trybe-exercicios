import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Email Entry Screen', () => {
  it('Check if there is an email input on the screen', () => {
    // Acessar os elementos da tela
    render(<App />) // Renderizando o componente a ser testado
    const inputEmail = screen.getByLabelText('E-mail'); // pegando item (tag) a ser testado = seu conteúdo
  
    // Fazer os testes
    expect(inputEmail).toBeInTheDocument(); // testando se o input esta na tela
    expect(inputEmail.type).toBe('email'); // testando se é do tipo e-mail
  
  });
  
  it('Check if there are two buttons on the screen', () => {
  //  1 - Acessar os elementos na tala
    render(<App />);
    const buttons = screen.getAllByRole('button');
  
  //  3 - Fazer os testes 
    expect(buttons).toHaveLength(2);
  });
  
  it("Check if there is a 'Submit' button on the screen", () => {
    //  1 - Acessar os elementos na tala
    render(<App />);
    const buttonSubmit = screen.getByTestId('button-submit');
  
  //  3 - Fazer os testes
    expect(buttonSubmit).toBeInTheDocument(); 
    expect(buttonSubmit).toHaveValue('Enviar');
  });
  
  it("Check that when typing in the input and clicking the send button the text is rendered", () => {
  // 1 - Acessar os elementos na tala
    render(<App />);
    const inputEmail = screen.getByLabelText('E-mail');
    const buttonSubmit = screen.getByTestId('button-submit');
    const emailUser = screen.getByTestId('id-email-user');
  
  //  2 - Intergir com os elementos (se for necessário)
    userEvent.type(inputEmail, 'test@test.com');
    userEvent.click(buttonSubmit);
  
  //  3 - Fazer os testes
    expect(inputEmail).toHaveValue('');
    expect(emailUser).toHaveTextContent('Valor: test@test.com');
  });
});
/*
 Passos para o teste

 1 - Acessar os elementos na tala
 2 - Intergir com os elementos (se for necessário)
 3 - Fazer os testes
 */