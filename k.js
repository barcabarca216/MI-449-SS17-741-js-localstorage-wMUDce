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



var remember = document.getElementById('changetheme')



var visit = window.localStorage.getItem('visit')

if (visit === null) {
  visit = 0
} else {
  visit = parseInt(visit)
}

var visitcount = window.localStorage.getItem('visitcount') === 'true'
