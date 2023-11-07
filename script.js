
  const board = [
    ["X",2,3],
    [4,"X",6],
    [7,8,"X"]
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
        return console.log(`${player1.name} Wins`)
      }
      else if (text === "OOO"){
        return console.log(`${player2.name} Wins`)
      }
    text = '';
  }

  for (i = 0 ; i < 3 ; i++){
    for (j = 0; j < 3 ; j++){
      text = text + board[j][i]
    }
    if (text === "XXX"){
      return console.log(`${player1.name} Wins`)
    }
    else if (text === "OOO"){
      return console.log(`${player2.name} Wins`)
    }
    text = '';
  }

  for (i = 0; i < 3; i++){
    text = text + board[i][i]
  }
  if (text === "XXX"){
    return console.log(`${player1.name} Wins`)
  }
  else if (text === "OOO"){
    return console.log(`${player2.name} Wins`)
  }
  text = '';


  for (i = 2; i >= 0; i--){
    text = text + board[i][i]
  } 
  if (text === "XXX"){
    return console.log(`${player1.name} Wins`)
  }
  else if (text === "OOO"){
    return console.log(`${player2.name} Wins`)
  }
  text = '';
}
console.log(board)

winGame()
