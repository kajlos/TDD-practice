import capitalize from './capitalize.js';

test('Capitalize plain text', () => {
  expect(capitalize('test')).toEqual('Test');
});
test('works with space', () => {
  expect(capitalize('     test')).toEqual('Test');
});
