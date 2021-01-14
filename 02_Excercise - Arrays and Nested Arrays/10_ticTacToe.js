function foo(arr) {
    const board = [0, 0, 0].map(x => ["false", "false", "false"])
    let player = "X"

    function isWinningMove(board, row, place) {
    	// after the move has been made, we -->
        // check current row for 3 equals
        // || reducing to new array with column === the place player is marking.
        //e.g. if player is on place 2 in row 1,
        //we make new array with all places 2 from all 3 rows
        //to check for column equality
        // || adding main diagonal to new array, checking it for equality
        // || adding second diagonal and checking it.
        return (
            board[row].every(x => x === player) ||
            board
                .reduce((a, v) => {
                    a.push(v[place])
                    return a
                }, [])
                .every(x => x === player) ||
            [board[0][0], board[1][1], board[2][2]].every(x => x === player) ||
            [board[0][2], board[1][1], board[2][0]].every(x => x === player)
        )
    }

    const printBoard = board => console.log(board.map(x => x.join("\t")).join("\n"))

    for (let i = 0; i < arr.length; i++) {
        const [row, place] = arr[i].split(" ").map(Number)

        if (board[row][place] !== "false") {
            console.log("This place is already taken. Please choose another!")
            continue
        }
        board[row][place] = player

        if (isWinningMove(board, row, place)) {
            console.log(`Player ${player} wins!`)
            printBoard(board)
            break
        }

        if (board.every(x => x.every(y => y !== "false"))) {
            console.log("The game ended! Nobody wins :(")
            printBoard(board)
            break
        }

        player = player === "X" ? "O" : "X"
    }
}
