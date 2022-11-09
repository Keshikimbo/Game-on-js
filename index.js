const start = document.querySelector('#start')
const game = document.querySelector('#game')

let score = 0
start.addEventListener('click', startGame)
game.addEventListener('click', handleBoxClick)

function startGame() {
	game.style.backgroundColor = '#fff'
	start.classList.add('hide')

	renderBox()
}

function handleBoxClick(event) {
if (event.target.dataset){
	score++
	renderBox()
}
}

function renderBox(){
const boxSize = getRandom(30, 100)
game.innerHTML = ''
const box = document.createElement('div')
const gameSize = game.getBoundingClientRect()
const maxTop = gameSize.height - boxSize
const maxLeft = gameSize.width - boxSize
//console.log(gameSize)


box.style.height = box.style.width = boxSize + 'px'
box.style.position = 'absolute'
box.style.backgroundColor = '#000'
box.style.top = getRandom(0, maxTop) + 'px'
box.style.left = getRandom(0, maxLeft) + 'px'
box.style.cursor = 'pointer'
box.setAttribute('data-box', 'true')

game.insertAdjacentElement('afterbegin', box)
}


function getRandom(min, max){
	return Math.floor(Math.random() * (max - min) + min)
}