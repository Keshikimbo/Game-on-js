const start = document.querySelector('#start')
const game = document.querySelector('#game')
start.addEventListener('click', startGame)
game.addEventListener('click', handleBoxClick)

function startGame() {
	game.style.backgroundColor = '#fff'
	start.classList.add('hide')

	renderBox()
}

function handleBoxClick(event) {
console.log(event.target.dataset)
}

function renderBox(){
const box = document.createElement('div')
box.style.height = box.style.width = '50px'
box.style.position = 'absolute'
box.style.backgroundColor = '#000'
box.style.top = '50px'
box.style.left = '70px'
box.style.cursor = 'pointer'
box.setAttribute('data-box', 'true')

game.insertAdjacentElement('afterbegin', box)
}