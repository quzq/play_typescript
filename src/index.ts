
class Foo{
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  log(){
    console.log(this.x, this.y)
  }

}

const foo = new Foo(2,3)
foo.log()