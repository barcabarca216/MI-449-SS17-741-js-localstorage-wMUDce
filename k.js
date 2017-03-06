var buttonElement = document.getElementById('theme')

buttonElement.addEventListener('click', function () {
  if (theme === 'day') {
    theme = 'night'
  } else {
    theme = 'day'
  }
  document.body.setAttribute('class', theme)
}

)
var theme = window.localstorage.getItem('theme', theme)
var theme2 = window.localStorage.setItem('theme', theme2)

//var visit = window.localStorage.getItem('visits')
