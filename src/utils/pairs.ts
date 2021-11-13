type IPairListReturn<T> = [T, T][];

export function generatePairList<T>(items: T[]): IPairListReturn<T> {
  const pairs: IPairListReturn<T> = [];
  for (let i = 0; i < Math.ceil(items.length / 2); i++) {
    pairs.push([items[2 * i], items[2 * i + 1]]);
  }
  return pairs;
}
