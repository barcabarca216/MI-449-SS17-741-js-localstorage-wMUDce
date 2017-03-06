var buttonElement = document.getElementById('changetheme')

buttonElement.addEventListener('click', function () {
  if (theme === 'day') {
    theme = 'night'
  } else {
    theme = 'day'
  }
  document.body.setAttribute('class', theme)
  window.localStorage.setItem('theme', theme)
}

)
var theme = window.localStorage.getItem('theme')
if (theme === null) {
  theme = 'day'
} window.localStorage.setItem('theme', theme)
document.body.setAttribute('class', theme)

var visit = window.localStorage.getItem('visit')

if (visit === null) {
  visit = 0
} else {
  visit = parseInt(visit)
}

visit = visit + 1
window.localStorage.setItem('visit', visit)
document.getElementById('visit').innerHTML = 'You have visited ' + visit + ' times.'
