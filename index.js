function whisper(string) {
  var lowercase = 'hello!'
  lowercase.toLowerCase() === lowercase // true
  return string.lowercase.toLowerCase()
}

function logShout(string) {
  var uppercase = 'HELLO!'
  uppercase.toUpperCase() === uppercase // true
  return string.uppercase.toUpperCase()
}
console.log(logShout)

