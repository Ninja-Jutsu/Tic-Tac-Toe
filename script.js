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
   function GameBoard(){
    board = [
      [],
      [],
      []
    ]
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
    console.log(board)
  }

  function placeTokenOnScreen() {
    for (i = 0; i < 9 ; i++){
      let cell = document.querySelector(`.cell-${i}`)
      cell.addEventListener("click", () => {
        if(cell.innerText !== "X" && cell.innerText !== "O"){
        cell.innerText = actualPlayer.token
        switchPlayer()
        }
      })
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

  let entireBoard = document.getElementById("game-board")
  entireBoard.addEventListener("click" , placeTokenOnScreen)
  entireBoard.addEventListener("click" , GameBoard)
  entireBoard.addEventListener("click" , checkWinner)

  
  //+ Functions Invocation:
  return {resetBoard , checkWinner, placeTokenOnScreen, GameBoard}
}

function hidePopup(){
  let popup = document.querySelector(".player-details")
  popup.style.display = "none"
}

//! Execute functions:

let startBtn = document.getElementById("start-btn")
let entireBoard = document.getElementById("game-board")
startBtn.addEventListener("click" , collectInput)
// startBtn.addEventListener("click" , TicTacToe)
startBtn.addEventListener('click', hidePopup)
startBtn.addEventListener("click", TicTacToe)
// entireBoard.addEventListener("click" , TicTacToe().placeTokenOnScreen)
// entireBoard.addEventListener("click" , TicTacToe().GameBoard)
// entireBoard.addEventListener("click" , TicTacToe().checkWinner)




