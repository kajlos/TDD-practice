function analyze(array) {
  let length = array.length;
  let helpArray1 = Array.from(array);
  let helpArray2 = Array.from(array);
  let min = helpArray1.sort((a, b) => a - b)[0];
  let max = helpArray2.sort((a, b) => b - a)[0];
  let average;
  let sum = 0;
  array.forEach(element => {
    sum += element * 100;
  });
  average = sum / 100 / length;
  return { length, min, max, average };
}

export default analyze;
