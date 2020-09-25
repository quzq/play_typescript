export default ():void => {
  console.log('--- array.ts -----------------------------')
  console.log('set empty array with type')
  {
    const arr:number[]=[]
    console.log(arr)
  }

  // 1. Explicitly declare the type
var arr1: number[] = [];

// 2. Via type assertion
var arr2 = <number[]>[];
var arr3 = [] as number[];

// 3. Using the Array constructor
var arr4 = new Array<number>(); //引数を省略すると空配列が作成される


}