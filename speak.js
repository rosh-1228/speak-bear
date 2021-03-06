const { Input } = require('enquirer')

module.exports = class Bear {
  constructor () {
    this.bear = `ʕ•ᴥ•ʔ
|⊃u⊂|
(∩-∩)`
  }

  output (word) {
    return new Promise((resolve) => {
      setTimeout(() => {
        process.stdout.write(word)
        resolve(word)
      }, 20)
    })
  }

  async repeat (message) {
    for (const word of message) {
      await this.output(word)
    }
    console.log('')
  }

  async speak (message) {
    this.appear()
    await this.repeat(message)
  }

  async input (message) {
    const prompt = new Input({
      initial: 'ex) Hello!'
    })
    await this.speak(this.strSlice(message))
    const input = await prompt.run()
    await this.speak(this.strSlice(input))
  }

  appear () {
    console.clear()
    require('readline').cursorTo(process.stdout, 0, 0)
    console.log(this.bear)
    process.stdout.write('━━^')
    for (let i = 0; i < process.stdout.columns / 2; i++) {
      process.stdout.write('━')
    }
    console.log('')
  }

  strSlice (message) {
    const texts = []
    let slice = 2
    if (message.match(/^[^\x01-\x7E\xA1-\xDF]+$/)) {
      slice = 4
    }
    for (let i = 0; i < message.length; i += (process.stdout.columns / slice)) {
      texts.push(message.substring(i, i + (process.stdout.columns / slice)))
      texts.push('\n')
    }
    return texts.join('')
  }
}
