function TicTacToe(fName, sName){
  let board = [
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]

  let player1 = {
    name : fName,
    token : "X"
  }

  let player2 = {
    name : sName,
    token : "O"
  }

  const placeToken = function (player, position) {
      for(i = 0; i < board.length ; i++){
      let tokenPosition = board[i].findIndex(cell => cell === position)
        if (tokenPosition === -1){
          continue
        }
        else {
          board[i][tokenPosition] = player.token
        }
      }
      console.log(board)
  }

  const checkWinner = function (){
    let line = ''
    //! Loop diagonally from top/left:
    for (i = 0; i < 3; i++){
      line += board[i][i]
    }
    if (line === "XXX"){
      return console.log(`${player1.name} Wins`)
    }
    else if (line === "OOO"){
      return console.log(`${player2.name} Wins`)
    }

    //! Loop diagonally from top/right:
    for (i = 2, j = 0; i >= 0 && j < 3; i--, j++){
      line += board[i][j]
    } 
    if (line === "XXX"){
      return console.log(`${player1.name} Wins`)
    }
    else if (line === "OOO"){
      return console.log(`${player2.name} Wins`)
    }

    //! Loop through columns
    for (i = 0; i < 3 ; i++){
      const columns = board.map(array => array[i]);
      line = columns.toString();
      if (line === "X,X,X"){
        return console.log(`${player1.name} Wins`)
      }
      else if (line === "O,O,O"){
        return console.log(`${player2.name} Wins`)
      }
    }

    //! Loop through rows:
    for (i = 0; i < 3 ; i ++){ 
      line = board[i].toString();
      if (line === "X,X,X"){
        return console.log(`${player1.name} Wins`)
      }
      else if (line === "O,O,O"){
        return console.log(`${player2.name} Wins`)
      }
    }
    line = '';
  }

  //! Reset the GameBoard:
  const resetBoard = function(){
    board = [
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]
    return console.log(board)
  }
  return {player1 , player2 , resetBoard , checkWinner, placeToken}
}


player = TicTacToe("Ismail", "Vanessa")
player.checkWinner()


