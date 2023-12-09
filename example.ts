function findDuplicates(array, numberOfDuplicates) {
  const m = new Map();
  for (let i = 0; i < array.length; i++) {
    if (m.has(array[i])) {
      m.set(array[i], parseInt(m.get(array[i]) + 1));
    } else {
      m.set(array[i], 0);
    }
  }
  const values = [];
  m.forEach((value, key) => {
    if (value == numberOfDuplicates - 1) {
      values.push(key);
    }
  });
  return values;
}
console.log(findDuplicates([-1, 1, 3, 3, 2], 2));
