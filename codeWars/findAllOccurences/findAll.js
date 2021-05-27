const findAll = (array, n) => {
  const targetIndex = [];

  array.forEach((element, index) => {
    if (element === n) targetIndex.push(index);
  });

  return targetIndex;
};
