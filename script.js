// const cells = document.querySelectorAll('.cell');
// const resetButton = document.getElementById('reset');
// const player1Input = document.getElementById('player1');
// const player2Input = document.getElementById('player2');
// const score1Span = document.getElementById('score1');
// const score2Span = document.getElementById('score2');
// let currentPlayer = 'X';
// let board = ['', '', '', '', '', '', '', '', ''];
// let scores = { X: 0, O: 0 };
// const winPatterns = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// ];

// cells.forEach(cell => {
//     cell.addEventListener('click', handleCellClick);
// });

// resetButton.addEventListener('click', resetGame);

// function handleCellClick(e) {
//     const index = e.target.getAttribute('data-index');

//     if (board[index] !== '') return;

//     board[index] = currentPlayer;
//     e.target.textContent = currentPlayer;

//     if (checkWin(currentPlayer)) {
//         updateScore(currentPlayer);
//         setTimeout(() => alert(`${getPlayerName(currentPlayer)} wins!`), 10);
//         return;
//     }

//     if (board.every(cell => cell !== '')) {
//         setTimeout(() => alert('It\'s a draw!'), 10);
//         resetGame();
//         return;
//     }

//     currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
// }

// function checkWin(player) {
//     return winPatterns.some(pattern => {
//         return pattern.every(index => {
//             return board[index] === player;
//         });
//     });
// }

// function updateScore(player) {
//     scores[player]++;
//     if (player === 'X') {
//         score1Span.textContent = scores[player];
//     } else {
//         score2Span.textContent = scores[player];
//     }
//     resetBoard();
// }

// function resetGame() {
//     resetBoard();
//     scores = { X: 0, O: 0 };
//     score1Span.textContent = scores.X;
//     score2Span.textContent = scores.O;
// }

// function resetBoard() {
//     board = ['', '', '', '', '', '', '', '', ''];
//     cells.forEach(cell => cell.textContent = '');
//     currentPlayer = 'X';
// }

// function getPlayerName(player) {
//     if (player === 'X') {
//         return player1Input.value || 'Player 1';
//     } else {
//         return player2Input.value || 'Player 2';
//     }
// }

const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset');
const player1Input = document.getElementById('player1');
const player2Input = document.getElementById('player2');
const score1Span = document.getElementById('score1');
const score2Span = document.getElementById('score2');
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let scores = { X: 0, O: 0 };
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

resetButton.addEventListener('click', resetGame);

function handleCellClick(e) {
    const index = e.target.getAttribute('data-index');

    if (board[index] !== '') return;

    board[index] = currentPlayer;
    e.target.textContent = currentPlayer;

    if (checkWin(currentPlayer)) {
        const winningPlayer = currentPlayer;
        updateScore(winningPlayer);
        setTimeout(() => alert(`${getPlayerName(winningPlayer)} wins!`), 10);
        return;
    }

    if (board.every(cell => cell !== '')) {
        setTimeout(() => alert('It\'s a draw!'), 10);
        resetGame();
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWin(player) {
    return winPatterns.some(pattern => {
        return pattern.every(index => {
            return board[index] === player;
        });
    });
}

function updateScore(player) {
    scores[player]++;
    if (player === 'X') {
        score1Span.textContent = scores[player];
    } else {
        score2Span.textContent = scores[player];
    }
    resetBoard();
}

function resetGame() {
    resetBoard();
    scores = { X: 0, O: 0 };
    score1Span.textContent = scores.X;
    score2Span.textContent = scores.O;
}

function resetBoard() {
    board = ['', '', '', '', '', '', '', '', ''];
    cells.forEach(cell => cell.textContent = '');
    currentPlayer = 'X';
}

function getPlayerName(player) {
    if (player === 'X') {
        return player1Input.value || 'Player 1';
    } else {
        return player2Input.value || 'Player 2';
    }
}
