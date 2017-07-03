function Medusa(name) {
  this.name = name
  this.statues = []
  this.stare = function(person) {
    if (this.statues.length < 3) {
      person.stoned = true
      this.statues.push(person)
    }
    else {
      this.statues.push(person)
      person.stoned = true
      let firstVictim = this.statues.shift()
      firstVictim.stoned = false
    }
  }
}

function Person(name) {
  this.name = name
  this.stoned = false
}

module.exports = {
  Medusa,
  Person
}
