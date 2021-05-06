function productFib(prod) {
  // calculate list of fib numbers
  function getFibList(n) {
    const fib = [];

    fib[0] = 0;
    fib[1] = 1;

    for (let i = 2; i <= n; i++) {
      fib[i] = fib[i - 2] + fib[i - 1];
      if (fib[i] >= n) return fib;
    }
  }

  const fibList = getFibList(prod);

  let i = 0;

  while (i <= fibList.length) {
    if (fibList[i] * fibList[i + 1] === prod)
      return [fibList[i], fibList[i + 1], true];
    if (fibList[i] * fibList[i + 1] > prod)
      return [fibList[i], fibList[i + 1], false];
    i++;
  }
}
