
  const board = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ]

  let player1 = {
    name : "Ismail",
    token : "X"
  }

  let player2 = {
    name : "Vanessa",
    token : "O"
}


function placeToken(player, position) {
    for(i = 0; i < board.length ; i++){
    let tokenPosition = board[i].findIndex(cell => cell === position)
      if (tokenPosition === -1){
        continue
      }
      else {
        board[i][tokenPosition] = player.token
      }
      console.log(board)

  }
}

placeToken(player1 , 4)
placeToken(player2 , 7)
