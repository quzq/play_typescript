import readline from 'readline'

export default () => {
  let time = 0

  setInterval(() => {
    readline.cursorTo(process.stdout, 0);
    process.stdout.write(`time: ${++time}`);
    //console.log(`time: ${++time}`);
  }, 1000)
}
