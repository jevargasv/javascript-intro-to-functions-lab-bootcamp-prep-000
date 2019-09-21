function shout(string) {
  var uppercase = 'HELLO!'
  uppercase.toUpperCase() === uppercase // true
  return string.toUpperCase()
}

function whisper(string) {
  var lowercase = 'hello!'
  lowercase.toLowerCase() === lowercase // true
  return string.toLowerCase()
}

function logShout(string) {
  var uppercase = 'HELLO!'
  uppercase.toUpperCase() === uppercase // true
  console.log(string.toUpperCase())
}