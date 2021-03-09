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
    const zero = 0
    console.log(!zero)

    const foo: number = parseInt('a')
    const bar = Number('a')
    console.log('foo', foo, isNaN(foo))
    console.log('bar', bar, isNaN(bar))

    const foo_: number = parseInt('a')
    const bar_: number = parseInt('0')
    console.log('foo_', foo_, !foo_)
    console.log('bar_', bar_, !bar_)


  }
  {
    console.log("  Date ");
    const date1: Date = new Date()
    const date2: Date = new Date()
    console.log(typeof (date1))
    console.log(date1.getTime(), date2.getTime(), date1.getTime() === date2.getTime())
    console.log(date1.getTime(), date2.getTime(), date1 === date2)
  }

}
