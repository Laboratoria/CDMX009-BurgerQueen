const desayunoMenuUrl = 'https://v2-api.sheety.co/08037a6e719e10abd51ee7fe17bba593/burgerQueenMenu/desayunos'
const dinnerMenuUrl = 'https://v2-api.sheety.co/08037a6e719e10abd51ee7fe17bba593/burgerQueenMenu/comidas';

export const breakfastMenu = () => {
    fetch(desayunoMenuUrl)
        .then(response => response.json())
        .then(data => {
            let container = document.getElementById('root')
            let items = data.desayunos.map(product => `${product.item} ${product.price} </br>`)
            container.innerHTML = items.join('')
            console.log(items)

        })
        .catch(err => console.log(err))
}

export const dinnerMenu = () => {
    fetch(dinnerMenuUrl)
        .then(response => response.json())
        .then(data => {
            let container = document.getElementById('root2')
            let items = data.comidas.map(product => `${product.item} ${product.price} </br>`)
            container.innerHTML = items.join('')
            console.log(items)

        })
        .catch(err => console.log(err))
}

