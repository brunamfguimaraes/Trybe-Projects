const { getUserName } = require('./arquivo2_dia2');

  it('Encontra o usuário pelo ID', () => {

      expect.assertions(1);
      return getUserName(4).then(data => expect(data).toEqual('Mark'));
  })

  it('Usuário não é encontrado', () => {
    expect.assertions(1);
    return getUserName(2).catch(error =>
      expect(error).toEqual({error: 'User with 2 not found.'}));
  });