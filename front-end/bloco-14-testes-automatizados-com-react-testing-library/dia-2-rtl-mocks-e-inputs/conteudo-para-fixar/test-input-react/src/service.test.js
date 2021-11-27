const randomNumber = require("./service");

describe('primeiro vamos praticar os mocks sem o React', () => {
  test('Teste a função que gera um número aleatório', () => {
    const randomNumber = jest.fn().mockReturnValue(10);
    randomNumber()
    expect(randomNumber).toBeCalled();
    expect(randomNumber).toBeCalledTimes(1)
    expect(randomNumber()).toBe(10)
  });
  
  test('utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo', () => {
    const randomNumber = jest.fn().mockImplementation((a, b) => { return a / b});
    randomNumber(6,2);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledWith(6,2);
    expect(randomNumber).toBeCalledTimes(1);
    expect(randomNumber(6,2)).toBe(3);
  });
  
  test('Utilize o mock e desenvolva uma nova implementação que receba três parâmetros', () => {
    const randomNumber = jest.fn().mockImplementation((a, b, c) => { return a * b * c});
    randomNumber(2, 3, 4);
    expect(randomNumber).toHaveBeenCalled();
     expect(randomNumber).toHaveBeenCalledWith(2,3,4);
    expect(randomNumber(2,3,4)).toBe(24);
    expect(randomNumber).toBeCalledTimes(2);
  });

  randomNumber.mockReset()
});