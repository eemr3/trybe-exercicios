const { expect } = require('@jest/globals');
const uppercase = require('./requisito07');

it('Returna palavra escrita em minúscula para maiúscula', (done) => {
  uppercase('betrybe', (str) => {
    try {
      expect(str).toBe('BETRYBE');
      done();
    } catch (error) {
      done(error);
    }
  })
  
});