function Centaur(name, breed) {
  let counter = 0
  this.name = name
  this.breed = breed

  this.shoot = function(){
    counter++
    if (counter >= 3) {
      this.cranky = true
      return 'NO!'
    }
    if (this.layingDown) {
      return 'NO!'
    }
    return 'Twang!!!'
  }

  this.run = function(){
    counter++
    if (counter >= 3) {
      this.cranky = true
    }
    if (this.layingDown) {
      return 'NO!'
    }
    return 'Clop clop clop clop!!!'
  }

  this.cranky = false
  this.standing = true

  this.sleep = function() {
    if (this.standing) {
      return 'NO!'
    }
    if (this.layingDown) {
      this.cranky = false
      counter = 0
      return 'ZZZZ'
    }
  }

  this.layingDown = false

  this.layDown = function() {
    this.standing = false
    this.layingDown = true
  }

  this.standUp = function() {
    this.standing = true
    this.layingDown = false
  }

  this.drinkPotion = function() {
    if (this.standing && this.cranky) {
      this.cranky = false
    }
    else if (this.standing && this.cranky === false) {
      this.cranky = true
    }
    else {
      return 'Not while I\'m standing!'
    }
  }

}

module.exports = Centaur
