export default () => {
  console.log("--- generics.ts -----------------------------");
  console.log(`* `);
  {
    const test = <T>(arg: T): T => {
      return arg;
    }
    console.log(test<number>(1)); //=> 1
    console.log(test<string>("string")); //=> 文字列
  }

  console.log(`* `);
  {
    const test = <T>(arg: T): void => {
      console.log(arg)
    }
    test<number>(1); //=> 1
    test<string>("string"); //=> 文字列
  }
};
