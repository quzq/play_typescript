export default () => {
  console.log("====== types ===========================");
  {
    console.log("  ==== インデックスシグネチャ");
    type TFoo = {
      bar: string
      baz: number[]
    }
    const foo: TFoo = {
      bar: 'abc',
      baz: [123]
    }
    const key = Math.random() < 0.5 ? 'bar' : 'baz'
    const aaa = foo[key]
  }


}
