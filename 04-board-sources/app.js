const board = document.querySelector('#board');
const SQUARES_NUMBER = 504
const colors = ['#00ffcd', '#00ff8d', '#16ff00', '#d3ff00', '#ffc000', '#ff5e00']

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square')

    square.addEventListener('mouseover', () =>
        setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))
    board.append(square)

}

function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}