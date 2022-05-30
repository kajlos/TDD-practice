class calculator {
  static sum(a, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    if (isNaN(a) || isNaN(b)) return 'Error';
    return a + b;
  }
  static sub(a, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    if (isNaN(a) || isNaN(b)) return 'Error';
    return a - b;
  }
  static div(a, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    if (isNaN(a) || isNaN(b) || b === 0) return 'Error';
    return a / b;
  }
  static mul(a, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    if (isNaN(a) || isNaN(b)) return 'Error';
    return a * b;
  }
}
export default calculator;
