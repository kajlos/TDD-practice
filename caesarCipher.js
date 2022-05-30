function cipher(str, num) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let ascii = str[i].charCodeAt(str[i]);
    ascii += num;
    let ascii2 = (ascii + num) % 26;
    console.log(ascii2);
    result += String.fromCharCode(ascii);
  }
  return result;
}
export default cipher;
// For N from 1 to Text Length Do
// Take C = Nth character of Text
// Calculate R = the rank of C in the alphabet
// Calculate R2 = (R + Shift) Modulo 26
// Write the letter with rank R2 in the alphabet
// End For Loop
