function validParentheses(parens) {
  if (parens.length % 2 === 1) {
    return false;
  }

  const parenItems = parens.split('');
  const stack = [];
  let pairs = true;

  const openParen = {
    '(': ')',
  };

  const closeParen = {
    ')': true,
  };

  parenItems.forEach((char) => {
    if (openParen[char]) {
      stack.push(char);
    } else if (closeParen[char]) {
      if (openParen[stack.pop()] !== char) pairs = false;
    }
  });

  return pairs && stack.length === 0;
}

console.log(validParentheses('()')); // true
console.log(validParentheses('())')); // false
