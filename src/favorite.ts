export const compareArray = (a: number[], b: number[]): boolean => {
  console.log(a, b);
  if (a.length !== b.length) return false;
  return a.reduce(
    (prev: boolean, cur: number, idx) =>
      prev === false ? prev : cur === b[idx],
    true
  );
};
