function Pirate(name, job = 'Scallywag') {
  let counter = 0
  this.name = name
  this.job = job
  this.cursed = false
  this.commitHeinousAct = function() {
    counter++
    return (counter >= 3) ? this.cursed = true : false
  }
  this.robShip = function() {
    this.booty = this.booty + 100
    return 'YAARRR!'
  }
  this.booty = 0
}

module.exports = Pirate
