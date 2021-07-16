const { encode, decode } = require('./arquivo2_dia_1');

  it('teste se as vogal a, se torne 1', () => {
    expect(encode('a', 'e', 'i', 'o', 'u')).toEqual('1', '2', '3', '4', '5');
  });