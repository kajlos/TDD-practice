import cipher from './caesarCipher';
describe('cipher', () => {
  test('moves 1 letter', () => {
    expect(cipher('A', 1)).toEqual('B');
  });
  //   test('wraps', () => {
  //     expect(cipher('Z', 1)).toEqual('A');
  //   });
});
