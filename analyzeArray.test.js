import analyze from './analyzeArray';
describe('Analyze Array', () => {
  test('analyze', () => {
    expect(analyze([5, 1, 7, 3])).toEqual({
      average: 8,
      min: 1,
      max: 7,
      length: 4,
    });
  });
});
