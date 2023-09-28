module.exports = function reverse (n) {
  const string = Math.abs(n).toString();
  var newString = '';

  for (const char in string) {
      newString += string[string.length - 1 - char]
  }

  return newString;
}
