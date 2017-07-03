function Werewolf(name, location) {
  let counter = 0
  this.name = name
  this.location = location
  this.human = true
  this.wolf = false
  this.hungry = false
  this.victims = []
  this.eat = function(victim) {
    if (this.wolf) {
      victim.alive = false
      this.victims.push(victim)
      this.human = true
    }
    else {
      return 'Not hungry!'
    }
  }
  this.change = function() {
    if (counter % 2 === 0) {
      this.human = false
      this.wolf = true
      this.hungry = true
    }
    if (counter % 2 !== 0) {
      this.human = true
      this.wolf = false
      this.hungry = false
    }
    counter++
  }
}

function Victim(name) {
  this.name = name
  this.alive = true
}

module.exports = {
  Werewolf,
  Victim
}
