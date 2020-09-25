export default () => {
  console.log('--- generics.ts -----------------------------')
  console.log(`* `)
  function test<T>(arg: T): T {
    return arg;
  }

  console.log(test<number>(1)); //=> 1
  console.log(test<string>("string")); //=> 文字列


}