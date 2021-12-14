async function getData() {
    const response = await fetch('https://ghibliapi.herokuapp.com/films')
    const data = await response.json()
  } 
const request = new XMLHttpRequest();
if (request.status >= 200 && request.status < 400) {
    const data = JSON.parse(this.response)
    if (request.status >= 200 && request.status < 400) {
      data.forEach(movie => {
        const card = document.createElement('div')
        card.setAttribute('class', 'card')
  
        const h1 = document.createElement('h1')
        h1.textContent = movie.title
  
        const p = document.createElement('p')
        movie.description = movie.description.substring(0, 300)
        p.textContent = `${movie.description}...`
  
        container.appendChild(card)
        card.appendChild(h1)
        card.appendChild(p)
      })
    } 
  }

const app = document.getElementById('root')
const logo = document.createElement('img')
logo.src = 'cutelogo.jpeg'
const container = document.createElement('div')
container.setAttribute('class', 'container')
app.appendChild(logo)
app.appendChild(container)