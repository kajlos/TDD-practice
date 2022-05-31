import cipher from './caesarCipher';
describe('cipher', () => {
  test('moves 1 letter', () => {
    expect(cipher('A', 1)).toEqual('B');
  });
  test('wraps', () => {
    expect(cipher('Z', 1)).toEqual('A');
  });
  test('works withm small and big letters', () => {
    expect(cipher('ZsdF', 4)).toEqual('DwhJ');
  });
  test('dosent shift numbers and punctuation', () => {
    expect(cipher('Zs.1dF', 4)).toEqual('Dw.1hJ');
  });
});
