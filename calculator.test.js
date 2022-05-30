import calculator from './calculator';

describe('sum', () => {
  test('sums 2 numbers', () => {
    expect(calculator.sum(5, 3)).toEqual(8);
  });
  test('works if numbers are sent as string', () => {
    expect(calculator.sum('5', '2')).toEqual(7);
  });
  test('works with negative numbers', () => {
    expect(calculator.sum(-3, -2)).toEqual(-5);
  });
  test('works with floating point numbers', () => {
    expect(calculator.sum(4.2, 5.3)).toEqual(9.5);
  });
  test('returns error when not numbers', () => {
    expect(calculator.sum(34, 'sdf')).toEqual('Error');
  });
});
describe('sub', () => {
  test('subtracts 2 numbers', () => {
    expect(calculator.sub(7, 2)).toEqual(5);
  });
  test('works if numbers are sent as string', () => {
    expect(calculator.sub('5', '2')).toEqual(3);
  });
  test('works with negative numbers', () => {
    expect(calculator.sub(-3, -2)).toEqual(-1);
  });
  test('works with floating point numbers', () => {
    expect(calculator.sub(4.2, 5.3)).toBeCloseTo(-1.1);
  });
  test('returns error when not numbers', () => {
    expect(calculator.sub(34, 'sdf')).toEqual('Error');
  });
});
describe('divide', () => {
  test('divides 2 numbers', () => {
    expect(calculator.div(6, 2)).toEqual(3);
  });
  test('works with 0', () => {
    expect(calculator.div(6, 0)).toEqual('Error');
  });
  test('works with negative numbers', () => {
    expect(calculator.div(-8, -4)).toEqual(2);
  });
  test('works if numbers are sent as string', () => {
    expect(calculator.div('8', '2')).toEqual(4);
  });
  test('works with floating point numbers', () => {
    expect(calculator.div(9.5, 2)).toBeCloseTo(4.75);
  });
  test('returns error when not numbers', () => {
    expect(calculator.div(34, 'sdf')).toEqual('Error');
  });
});
describe('multiply', () => {
  test('multiplies 2 numbers', () => {
    expect(calculator.mul(2, 4)).toEqual(8);
  });
  test('works if numbers are sent as string', () => {
    expect(calculator.mul('5', '2')).toEqual(10);
  });
  test('works with negative numbers', () => {
    expect(calculator.mul(-3, -2)).toEqual(6);
  });
  test('works with floating point numbers', () => {
    expect(calculator.mul(4.2, 5.3)).toBeCloseTo(22.26);
  });
  test('returns error when not numbers', () => {
    expect(calculator.mul(34, 'sdf')).toEqual('Error');
  });
});
