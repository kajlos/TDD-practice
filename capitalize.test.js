import capitalize from './capitalize.js';
describe('Capitalize', () => {
  test('Capitalize plain text', () => {
    expect(capitalize('test')).toEqual('Test');
  });
  test('works with space', () => {
    expect(capitalize('     test')).toEqual('Test');
  });
});
