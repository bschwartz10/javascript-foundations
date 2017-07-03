function Hobbit(name) {
  let age = 0
  this.name = name
  this.disposition = 'homebody'
  this.age = age
  this.adult = false
  this.isShort = true
  this.old = false
  if (this.name === 'Frodo') {
      this.hasRing = true
    }
  else {
      this.hasRing = false
    }
  this.celebrateBirthday = function() {
    this.age++
    if (this.age > 32) {
      this.adult = true
    }
    if (this.age > 100) {
      this.old = true
    }
  }
}

module.exports = Hobbit;
