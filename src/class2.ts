export default class Foo{
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
    this.setStorage('test', 'something')
  }

  setStorage(key: string, value: string): any{

    return null
  }
}
