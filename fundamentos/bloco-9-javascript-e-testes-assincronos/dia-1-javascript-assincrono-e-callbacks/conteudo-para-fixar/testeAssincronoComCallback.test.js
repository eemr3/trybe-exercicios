const asyncSum = require('./testeAssincronoComCallback');

test("Não deveria passar!", (done) => {
  setTimeout(() => {
    try {
      expect(5).toBe(5);
      console.log("Deveria falhar!");
      done();
    } catch (error) {
      done(error);
    }
  }, 500);
});

test('Retorna a soma de dois números inteiros', (done) => {
  asyncSum(5,10, (result) => {
    try {
      expect(result).toBe(15);
      done();
    } catch (error) {
      done(error);
    }
  })
});
