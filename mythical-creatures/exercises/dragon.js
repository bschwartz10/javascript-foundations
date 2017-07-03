function Dragon(name, rider, color) {
  let counter = 0
  this.name = name
  this.rider = rider
  this.color = color
  this.hungry = true
  this.eat = function() {
    counter++
    if (counter >= 3) {
      this.hungry = false
    }
  }
}

module.exports = Dragon
