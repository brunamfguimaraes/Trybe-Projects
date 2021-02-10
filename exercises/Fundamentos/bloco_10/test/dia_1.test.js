const sum = require('./dia_1');

describe('sum', () => {
  test('4 plus 5 equals 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

describe('sum', () => {
  it('o retorno da soma de 0 + 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
});
});
