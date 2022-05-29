function capitalize(string) {
  let trim = string.trim();
  return trim.charAt(0).toUpperCase() + trim.slice(1);
}
export default capitalize;
