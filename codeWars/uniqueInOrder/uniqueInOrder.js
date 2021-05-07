const uniqueInOrder = function (iterable) {
  // output array
  const order = [];

  let leftPointer = 0;
  let rightPointer = 1;

  // loop iterable
  while (rightPointer <= iterable.length) {
    // if consecutive items not same
    if (iterable[leftPointer] !== iterable[rightPointer]) {
      // add to output array
      order.push(iterable[leftPointer]);
    }
    leftPointer++;
    rightPointer++;
  }
  return order;
};
