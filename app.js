{
  const panels = document.querySelectorAll('.panel')

  const removeActiveClasses = () => {
    panels.forEach( panel => {
      panel.classList.remove('panel--active')
    })

  }

  panels.forEach( panel => {
    panel.addEventListener('click', () => {
      removeActiveClasses()
      panel.classList.add('panel--active')
    })
  })
}