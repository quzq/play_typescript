
export default ()=>{
class Foo{
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  log(){
    this.sayHello()
    console.log(this.x, this.y)
  }
  sayHello(){
    console.log('hello')
  }

}

const foo = new Foo(2,3)
foo.log()

}