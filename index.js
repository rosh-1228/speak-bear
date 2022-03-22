#!/usr/bin/env node
const Bear = require('./speak')
const Assesment = require('./assesment')
const argv = require('minimist')(process.argv.slice(2))
const data = require('./data')
const assesment = new Assesment()
const bear = new Bear()

const main = async () => {
  process.stdout.write('\x1B[?25l')
  if ('q' in argv) {
    let result, sum
    for (const question of data.questions) {
      result = await assesment.ask(question)
      sum += result.length
    }
    assesment.shuffle(data.characters, sum)
    await assesment.present(data.messages[0])
    await assesment.present(data.characters[Math.floor(Math.random() * data.characters.length)])
    await assesment.ask(data.requestion) === 'Yes' ? await main() : await assesment.present(data.messages[1])
  } else {
    await bear.input()
  }
  process.stdout.write('\x1B[?25h')
}

main()
