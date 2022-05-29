import reverseString from './reverseString';

describe('ReverseString', () => {
  test('reversesString', () => {
    expect(reverseString('test')).toEqual('tset');
  });
});
