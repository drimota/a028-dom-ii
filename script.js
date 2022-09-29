function adicionaItem(event) {
    const caixa = document.getElementById('container')
    const newArticle = document.createElement('article')
    const newItem = document.createTextNode('Novo Item')
    newArticle.appendChild(newItem)
    caixa.insertAdjacentElement('beforeend', newArticle)

    newArticle.setAttribute('class', 'item')
}

function removeItem(event) {
    event.target.remove()
}

