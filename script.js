const users = document.querySelector('#user');

const data = [
    { id: 0, name: 'Alex', sex: 'man', color: 'red' },
    { id: 1, name: 'Maks', sex: 'man', color: 'blue' },
    { id: 2, name: 'John', sex: 'man', color: 'green' },
    { id: 3, name: 'Mari', sex: 'woman', color: 'pink' },
]

data.map(e => {
    const li = document.createElement('ol')
    li.innerText = e.name
    li.setAttribute('data-color', e.color)
    li.setAttribute('data-user', e.id)
    li.className = 'list'

    users.append(li)
})

const li = document.querySelectorAll('.list')
const block = document.querySelector('.block')

li.forEach(e => {
    e.addEventListener('mouseenter', () => {
        const id = data[e.dataset.user]
        block.style.background = e.dataset.color
        e.classList.add('select')
        block.innerHTML = `<h2>User: ${id.name}</h2>`
        block.innerHTML += `<h3>INFO: ${id.id} || ${id.sex} || ${id.color}</h3>`
    })

    e.addEventListener('mouseleave', () => {
        block.style.background = ''
        e.classList.remove('select')
        block.innerHTML = ''
    })
})