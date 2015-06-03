function palindromeChainLength(a) {
  var b = 0;
  while (a != reverse(a)) {
    a += reverse(a);
    b++;
  }
  return b;
}

function reverse(a) {
  numTwo = a;
  a = String(a);
  a = a.split("").reverse().join("");
  return parseInt(a);
}

module.exports = {
  palindromeChainLength: palindromeChainLength,
  reverse: reverse
};