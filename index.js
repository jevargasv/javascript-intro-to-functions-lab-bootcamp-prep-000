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

function logWhisper(string) {
  var lowercase = 'hello!'
  lowercase.toLowerCase() === lowercase // true
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  var lowercase = "i can't hear you!"
  lowercase.toLowerCase() === lowercase // true
  
  var uppercase = 'YES INDEED!'
  uppercase.toUpperCase() === uppercase // true
  
  if (lowercase) {
    return string.toLowerCase()
  }
  }
} 