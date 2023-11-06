
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
    }i
}

function winGame(){
  let text = ''
  for (i = 0; i < board.length ; i++){
      for (j = 0; j < board.length; j++){
        text = text + board[i][j]
      }
      if (text === "XXX"){
        return console.log("Player1 Wins")
      }
      else if (text === "OOO"){
        return console.log("Player2 Wins")
      }
    text = '';
  }

  for (i = 0 ; i < 3 ; i++){
    for (j = 0; j < 3 ; j++){
      text = text + board[j][i]
    }
    if (text === "XXX"){
      return console.log("Player1 Wins")
    }
    else if (text === "OOO"){
      return console.log("Player2 Wins")
    }
    text = '';
    }
}
console.log(board)
placeToken(player2 , 7)
placeToken(player1 , 2)

placeToken(player2 , 9)
placeToken(player1 , 5)

placeToken(player2 , 1)
placeToken(player1 , 4)

placeToken(player2 , 3)
placeToken(player2 , 6)


// placeToken(player1 , 7)
// placeToken(player2 , 7)


winGame()
