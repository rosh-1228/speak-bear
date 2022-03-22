#!/usr/bin/env node
const Bear = require('./speak')
const Assesment = require('./assesment')
const program = require('commander')
const assesment = new Assesment()
const bear = new Bear()

program
  .version('1.0.0')
  .description('When run without options, the bear will perform a personality test.')
  .option('-q', 'start personality test')
  .option('-j', 'change Japanese')
  .parse(process.argv)

const options = program.opts()
let data, yes
if (options.j) {
  data = require('./data-ja')
  yes = 'はい'
} else {
  data = require('./data')
  yes = 'Yes'
}

const main = async () => {
  process.stdout.write('\x1B[?25l')
  if (options.q) {
    let result, sum
    for (const question of data.questions) {
      result = await assesment.ask(question)
      sum += result.length
    }
    assesment.shuffle(data.characters, sum)
    await assesment.present(data.messages[1])
    await assesment.present(data.characters[Math.floor(Math.random() * data.characters.length)])
    await assesment.ask(data.requestion) === yes ? await main() : await assesment.present(data.messages[2])
  } else {
    await bear.input(data.messages[0])
  }
  process.stdout.write('\x1B[?25h')
}

main()
