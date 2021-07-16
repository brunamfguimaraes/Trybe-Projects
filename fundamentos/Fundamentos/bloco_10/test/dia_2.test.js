const { uppercase } = require('./arquivo1_dia2');

  it('Transformar as letras em maiúsculas', () => {
    const toUpper = (str) => {
      expect(str).toBe('BRUNA');
    }
    uppercase('bruna', toUpper);
  });