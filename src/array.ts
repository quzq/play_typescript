export default (): void => {
  console.log("--- array.ts -----------------------------");
  console.log("set empty array with type");
  {
    const arr: number[] = [];
    console.log(arr);
  }

  // 1. Explicitly declare the type
  const arr1: number[] = [];

  // 2. Via type assertion
  const arr2 = <number[]>[];
  const arr3 = [] as number[];

  // 3. Using the Array constructor
  const arr4 = new Array<number>(); //引数を省略すると空配列が作成される

  console.log(Array(10).fill("0").join(""));
};
