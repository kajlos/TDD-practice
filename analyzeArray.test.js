import analyze from './analyzeArray';
describe('Analyze Array', () => {
  test('analyze', () => {
    expect(analyze([5, 1, 7, 3])).toEqual({
      average: 4,
      min: 1,
      max: 7,
      length: 4,
    });
  });
  test('works with floating points', () => {
    expect(analyze([5.2, 1.1, 7.3, 3.4])).toEqual({
      average: 4.25,
      min: 1.1,
      max: 7.3,
      length: 4,
    });
  });
});
