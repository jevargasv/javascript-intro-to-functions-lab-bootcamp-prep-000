function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  var lowercase = "i can't hear you!"
  lowercase.toLowerCase() === lowercase // true
  
  var uppercase = 'YES INDEED!'
  uppercase.toUpperCase() === uppercase // true
  
  var string = "I love you, Grandma."
  
  if (lowercase) {
    return string.toLowerCase()
  }
  else if (uppercase) {
    return string.toUpperCase()
  }
  else if (string) {
    return "I love you, too."
  }
} 