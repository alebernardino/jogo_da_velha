var board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

var currentPlayer = 'X';

var cells = document.querySelectorAll('#board td');
for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', makeMove);
}

function makeMove() {
    var row = this.parentNode.rowIndex;
    var col = this.cellIndex;

    if (board[row][col] === '') {
        board[row][col] = currentPlayer;
        this.innerHTML = currentPlayer;

        if (checkWin(currentPlayer)) {
            alert(currentPlayer + ' ganhou!');
            resetGame();
        } else if (checkTie()) {
            alert('Empate!');
            resetGame();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWin(player) {
    for (var i = 0; i < 3; i++) {
        if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
            return true;
        }
        if (board[0][i] === player && board[1][i] === player && board[2][i] === player) {
            return true;
        }
    }

    if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
        return true;
    }
    if (board[2][0] === player && board[1][1] === player && board[0][2] === player) {
        return true;
    }

    return false;
}

function checkTie() {
    for (var row = 0; row < 3; row++) {
        for (var col = 0; col < 3; col++) {
            if (board[row][col] === '') {
                return false;
            }
        }
    }
    return true;
}

function resetGame() {
    for (var row = 0; row < 3; row++) {
        for (var col = 0; col < 3; col++) {
            board[row][col] = '';
            document.getElementById('board').rows[row].cells[col].innerHTML = '';
        }
    }
}
