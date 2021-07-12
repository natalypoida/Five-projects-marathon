const board = document.querySelector('#board');
const SQUARES_NUMBER = 504

for (let index = 0; index < SQUARES_NUMBER; index++) {
    const square = document.createElement('div');
    square.classList.add('square')

    board.append(square)

}