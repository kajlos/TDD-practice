function cipher(str, num) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    let codeStart;
    if (charCode < 97) codeStart = 65;
    else codeStart = 97;
    if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
      let newLetter = String.fromCharCode(((charCode + num - codeStart) % 26) + codeStart);
      result += newLetter;
    } else {
      result += str[i];
    }
  }
  return result;
}

export default cipher;
