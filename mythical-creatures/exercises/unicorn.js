function Unicorn(name, color = 'white') {
  this.name = name
  this.color = color
}

Unicorn.prototype.isWhite = function() {
  return (this.color === 'white') ? true : false
}

Unicorn.prototype.says = function(saying) {
  return `**;* ${saying} *;**`
}

module.exports = Unicorn;
