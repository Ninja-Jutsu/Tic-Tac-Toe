function TicTacToe(fName, sName){
  let board = [
      [],
      [],
      []
    ]
  let player1 = {
    name : fName,
    token : "X"
  }
  let player2 = {
    name : sName,
    token : "O"
  }
  let actualPlayer = player1;


//+ Create the GameBoard:
const GameBoard = function makeBoard(){
  const GameBoard = function (){
    let z = 4
    let w = 1
    for(y = 0; y < 3; y++){
      for (i = w; i < z; i++){
        let cell = document.querySelector(`.cell-${i}`)
        board[y].push(cell.textContent)
      }
    z += 3
    w += 3
    }
  }
  GameBoard()

//+ Play a move:
  const placeToken = function (position) {
    console.log(board)
      for(i = 0; i < board.length ; i++){
      let tokenPosition = board[i].findIndex(cell => cell === position)
        if (tokenPosition === -1){
          continue
        }
        else {
          board[i][tokenPosition] = actualPlayer.token
          switchPlayer()
          console.log(actualPlayer)
        }
      }
      console.log(board)
  }

  placeToken("5")
  placeToken("7")


//+ Check THe winner:
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
    //* Loop diagonally from top/right:
    for (i = 2, j = 0; i >= 0 && j < 3; i--, j++){
      line += board[i][j]
    } 
    if (line === "XXX"){
      return console.log(`${player1.name} Wins`)
    }
    else if (line === "OOO"){
      return console.log(`${player2.name} Wins`)
@git c

  function switchPlayer(){
    if (actualPlayer === "player1")
    actualPlayer = "player2"
  }
    if (actualPlayer === player2)
    actualPlayer = player1
    else{actualPlayer = player2}
    }

  function changeCellStyle(){
    for (i = 1; i < 10; i++){
      let cell = document.querySelector(`.cell-${i}`)
      cell.addEventListener("click", () => cell.style.backgroundColor ="red")
    }
  }

  function changeCellContent(){

  }



  return {player1 , player2 , resetBoard , checkWinner, placeToken}
}

// TicTacToe().placeToken(5)


TicTacToe("Is", "Van")
