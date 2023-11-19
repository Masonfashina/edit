const div = document.createElement('div')
div.className = 'my-div'
div.id = 'my-div-1'
div.setAttribute('title', 'My Divv')

const text = document.createTextNode('hello World')
div.appendChild(text)

// text.document.style.color = black

document.body.appendChild(div)


