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
  {
    console.log("  ==== NaN ");
    const nan: number = Number.NaN
    console.log(isNaN(nan))
    const zero: number = 0
    console.log(!zero)

    const foo: number = parseInt('a')
    const bar: number = Number('a')
    console.log('foo', foo, isNaN(foo))
    console.log('bar', bar, isNaN(bar))

    const foo_: number = parseInt('a')
    const bar_: number = parseInt('0')
    console.log('foo_', foo_, !foo_)
    console.log('bar_', bar_, !bar_)


  }


}
