function collectInput(){
  let player1 = document.querySelector(".player1").value
  let player2 = document.querySelector(".player2").value
  return {player1 , player2}
  } 

function TicTacToe(){
  let board = [
      [],
      [],
      []
    ]
  let player1 = {
    name : collectInput().player1,
    token : "X"
  }
  let player2 = {
    name : collectInput().player2,
    token : "O"
  }
  let actualPlayer = player1;


//+ Create the GameBoard:
  const GameBoard = function (){
    let z = 3
    let w = 0
    for(y = 0; y < 3; y++){
      for (i = w; i < z; i++){
        let cell = document.querySelector(`.cell-${i}`)
        board[y].push(cell.textContent)
      }
    z += 3
    w += 3
    }
  }

//+ Play a move:

  const placeTokenInTheBoard = function () {
    for(i = 0; i < 9 ; i++){
      let cell = document.querySelector(`.cell-${i}`);
      let position = cell.innerText
      cell.addEventListener("click" , targetCell)

      function targetCell(){
        console.log(i)
        let tokenPosition = board[i].findIndex(x => x === position);
        console.log(position)
        console.log(tokenPosition)
        if (tokenPosition === -1){
          console.log("Not found")
        }
        else {
          board[i][tokenPosition] = actualPlayer.token
          switchPlayer()
          console.log(board)
        }
      }
    }
  }


//+ Check THe winner:
  function checkWinner (){
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
    }

  //* Loop through columns
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

  //* Loop through rows:
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

  function placeTokenOnScreen() {
    for (i = 0; i < 9 ; i++){
      let cell = document.querySelector(`.cell-${i}`)
      cell.addEventListener("click", () => {
        cell.innerText = actualPlayer.token
      })
    }
  }
  placeTokenInTheBoard()
  placeTokenOnScreen()


  //+ Reset the GameBoard:
  const resetBoard = function(){
    board = [
      [],
      [],
      []
    ]
    return console.log(board)
  }

  function switchPlayer(){
    if (actualPlayer === player2)
    actualPlayer = player1
    else{actualPlayer = player2}
    }

  function changeCellStyle(){
    for (i = 0; i < 9; i++){
      let cell = document.querySelector(`.cell-${i}`)
      cell.addEventListener("click", () => cell.style.backgroundColor ="red")
    }
  }

  //+ Functions Invocation:
  GameBoard()
  return {player1 , player2 , resetBoard , checkWinner, placeTokenInTheBoard}
}

function hidePopup(){
  let popup = document.querySelector(".player-details")
  popup.style.display = "none"
}

//! Execute functions:
let startBtn = document.getElementById("start-btn")
let entireBoard = document.getElementById("game-board")
startBtn.addEventListener("click" , collectInput)
startBtn.addEventListener("click" , TicTacToe)
startBtn.addEventListener('click', hidePopup)
entireBoard.addEventListener("click" , TicTacToe().checkWinner)


