function findOverlappingInterval(seedInterval, converterInterval) {
  if (seedInterval[0] > seedInterval[1]) {
    seedInterval.reverse();
  }
  const [a, b] = seedInterval;
  const [x, y] = converterInterval;
  if (Math.max(a, b) < Math.min(x, y)) {
    return [null, seedInterval, converterInterval];
  }
  if (Math.min(a, b) > Math.max(x, y)) {
    return [null, seedInterval, converterInterval];
  }
  let overlapping = [Math.max(a, x), Math.min(b, y)];
  if (overlapping[0] > overlapping[1]) {
    overlapping.reverse();
  }
  let firstLeftoverInterval = null;
  let secondLeftoverInterval = null;
  if (a < overlapping[0]) {
    firstLeftoverInterval = [a, overlapping[0] - 1];
  }
  if (b > overlapping[1]) {
    secondLeftoverInterval = [overlapping[1] + 1, b];
  }
  return [overlapping, firstLeftoverInterval, secondLeftoverInterval];
}

const overlappingInterval1 = findOverlappingInterval([79, 92], [50, 97]);
console.log(...overlappingInterval1);
