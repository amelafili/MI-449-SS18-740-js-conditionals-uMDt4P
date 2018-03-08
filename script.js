var firstMessage = window.prompt('Hey! Do you like turtles?').trim()
firstMessage = firstMessage.toLowerCase()

if (firstMessage === 'yes') {
  window.alert('Cool, I love turtles!')
} else if (firstMessage === 'no') {
  window.alert('That\'s sad to hear. :(')
} else if (firstMessage === 'I don\'t care') {
  window.alert('How though :(')
} else {
  window.alert('Try again!')
}

var firstConfirm = (window.confirm('Can we keep going?'))
if (firstConfirm) {
}

window.alert('Great, let\'s continue!')
window.alert('Let\'s do some turtle trivia then!')

var secondMessage = window.prompt('Something simple first, turtles can live where?').trim()
secondMessage = secondMessage.toLowerCase()

if (secondMessage === 'sea' && 'land') {
  window.alert('Right! One point for you :D')
} else {
  window.alert('Here\'s a hint: one place is covered in water and starts with an S, while the other is covered in grass and starts with L!')
}

window.alert('Now let\'s see if you can get this second question!')

var thirdMessage = window.prompt('Guess what a turtle\'s favorite number is :)').trim()

if (thirdMessage) {
  window.alert('Trick question! It\'s actually ' + Math.random())
}

window.alert('The number you did enter though can be useful!')

window.alert('Lets see if the number you entered is close to the age of the oldest turtle alive!')
thirdMessage = parseInt(thirdMessage)

if (thirdMessage > '100') {
  window.alert('Close!')
} else if (thirdMessage < '100') {
  window.alert('Too small of a number, but it\'s okay!')
}

window.alert('That\'s it. Thanks for playing 🐢')
