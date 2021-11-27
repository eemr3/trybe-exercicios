const service = require("./service");

const mockDogPictureAPI = {
  message: "https://images.dog.ceo/breeds/labrador/n02099712_1866.jpg",
  status: "success",
};

describe("primeiro vamos praticar os mocks sem o React", () => {
  test("Teste a função que gera um número aleatório", () => {
    service.randomNumber = jest.fn().mockReturnValue(10);

    expect(service.randomNumber()).toBe(10);
    expect(service.randomNumber).toBeCalled();
    expect(service.randomNumber).toBeCalledTimes(1);
  });

  test("utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo", () => {
    service.randomNumber = jest.fn().mockImplementation((a, b) => {
      return a / b;
    });

    service.randomNumber(6, 2);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledWith(6, 2);
    expect(service.randomNumber).toBeCalledTimes(1);
    expect(service.randomNumber(6, 2)).toBe(3);
  });

  test("Utilize o mock e desenvolva uma nova implementação que receba três parâmetros", () => {
    service.randomNumber = jest.fn().mockImplementation((a, b, c) => {
      return a * b * c;
    });

    service.randomNumber(2, 3, 4);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledWith(2, 3, 4);
    expect(service.randomNumber(2, 3, 4)).toBe(24);
    expect(service.randomNumber).toBeCalledTimes(2);

    service.randomNumber.mockReset();
    service.randomNumber = jest.fn().mockImplementation((a) => {
      return a * 2;
    });

    service.randomNumber(4);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledWith(4);
    expect(service.randomNumber(4)).toBe(8);
  });
});

describe("Teste das três funções de manipulação de strings", () => {
  it("teste da primeira função string caixa baixa", () => {
    const mockUpperCase = jest
      .spyOn(service, "stringUpperCase")
      .mockImplementation((str) => {
        return str.toLowerCase();
      });

    service.stringUpperCase("rosane");
    expect(mockUpperCase).toHaveBeenCalledTimes(1);
    expect(mockUpperCase("ROSANE")).toBe("rosane");
    expect(mockUpperCase).toHaveBeenCalledWith("rosane");

    service.stringUpperCase.mockRestore();
    expect(service.stringUpperCase("rosane")).toBe("ROSANE");
  });

  it("teste da segunda função retornar só a primeira letra", () => {
    service.strinFirtCharUpperCase = jest.fn().mockImplementation((str) => {
      return str.slice(-1);
    });

    service.strinFirtCharUpperCase("trybe");
    expect(service.strinFirtCharUpperCase).toHaveBeenCalled();
    expect(service.strinFirtCharUpperCase).toBeCalledWith("trybe");
    expect(service.strinFirtCharUpperCase).toBeCalledTimes(1);
    expect(service.strinFirtCharUpperCase("trybe")).toBe("e");
  });

  it("teste da terceira função concatenar strings", () => {
    service.concatString = jest
      .fn()
      .mockImplementation((strOne, strTwo, strThree) => {
        return strOne + strTwo + strThree;
      });

    service.concatString("Bra", "sile", "iro");
    expect(service.concatString).toHaveBeenCalled();
    expect(service.concatString).toBeCalledWith("Bra", "sile", "iro");
    expect(service.concatString).toBeCalledTimes(1);
    expect(service.concatString("Bra", "sile", "iro")).toBe("Brasileiro");
  });
});

describe("Teste da função que faça requisição para a api dog pictures", () => {
  service.apiDogPicture = jest.fn();
  afterEach(service.apiDogPicture.mockReset);

  test("testando requisição caso a promisse resolva", async () => {
    service.apiDogPicture.mockResolvedValue("request sucess");

    service.apiDogPicture();
    expect(service.apiDogPicture).toHaveBeenCalled();
    expect(service.apiDogPicture).toHaveBeenCalledTimes(1);
    await expect(service.apiDogPicture()).resolves.toBe("request sucess");
    expect(service.apiDogPicture).toHaveBeenCalledTimes(2);
  });

  test("testando requisição caso a promisse seja rejeitada", async () => {
    service.apiDogPicture.mockRejectedValue("request failed");

    expect(service.apiDogPicture).toHaveBeenCalledTimes(0);
    await expect(service.apiDogPicture()).rejects.toMatch("request failed");
    expect(service.apiDogPicture).toHaveBeenCalledTimes(1);
  });
});
