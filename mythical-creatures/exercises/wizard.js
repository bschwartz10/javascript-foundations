function Wizard(object) {
  let counter = 0
  this.name = object.name
  this.bearded = true
  if(object.bearded === false) {
    this.bearded = false
  }
  this.incantation = function(saying) {
    return saying.toUpperCase()
  }
  this.isRested = true
  this.cast = function() {
    counter++
    if (counter >= 3) {
      this.isRested = false
      return 'I SHALL NOT CAST!'
    }
    else {
      return 'MAGIC BULLET'
    }
  }

}

module.exports = Wizard
