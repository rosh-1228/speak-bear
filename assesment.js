const { Select } = require('enquirer')
const Bear = require('./speak')

module.exports = class Assesment {
  constructor () {
    this.bear = new Bear()
  }

  async ask (questions) {
    const prompt = new Select({
      type: 'select',
      choices: questions.choice
    })
    await this.bear.speak(this.bear.strSlice(questions.message))
    const answer = await prompt.run()
    return answer
  }

  async enter () {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    })
    return new Promise((resolve) => {
      readline.question('Enter ▼', () => {
        resolve()
        readline.close()
      })
    })
  }

  shuffle (results, count) {
    for (let i = 0; i < count; i++) {
      for (let i = results.length - 1; i > 0; i--) {
        const number = Math.floor(Math.random() * (i + 1))
        const tmp = results[i]
        results[i] = results[number]
        results[number] = tmp
      }
    }
    return results
  }

  async present (message) {
    await this.bear.speak(this.bear.strSlice(message))
    await this.enter()
  }
}
