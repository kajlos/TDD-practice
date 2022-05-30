function analyze(array) {
  let length = array.length;
  let helpArray1 = Array.from(array);
  let helpArray2 = Array.from(array);
  console.log(helpArray2);
  let min = helpArray1.sort((a, b) => a - b)[0];
  console.log(helpArray2.sort((a, b) => a + b)); //[0];
  let average;
  let sum;
  array.forEach(element => {
    sum += element;
  });
  average = sum / length;
  return { length, min, max, average };
}

export default analyze;
