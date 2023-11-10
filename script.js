function TicTacToe(){
  let board = [
      [],
      [],
      []
    ]
  let firstInput = document.querySelector(".player1").value
  let secondInput = document.querySelector(".player2").value
  let player1Name = document.querySelector(".name-player1")
  let player2Name = document.querySelector(".name-player2")
  let player1 = {
    name : firstInput,
    token : "X",
    color : "blue",
    streak: 0
  }
  let player2 = {
    name : secondInput,
    token : "O",
    color : "red",
    streak: 0
  }
  let actualPlayer = player1;

  function fillPlayerName(){
    if (firstInput === ""){
      player1.name = "Player 1"
    }
    if (secondInput === ""){
      player2.name = "Player 2"
    }
  }
  
//+ Create the GameBoard:
   function makeGameBoard(){
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
  }

  function placeTokenOnScreen() {
    for (i = 0; i < 9 ; i++){ // we dont need this loop can use .cell
      let cell = document.querySelector(`.cell-${i}`)
      cell.addEventListener("click", () => {
        console.log(cell.innerHTML)
        if(cell.innerHTML !== "X" && cell.innerHTML !== "O"){
        cell.innerText = actualPlayer.token
        cell.style.visibility = "visible"
        switchPlayer()
        }
      })
    }
  }

//+ Check THe winner:
  function checkWinner (){
    let line = ''
    let winner = document.querySelector(".winner")
    let stopScreenDisplay = document.querySelector(".stop-game")
    let streakPlayer1 = document.querySelector(".streak-player1")
    let streakPlayer2 = document.querySelector(".streak-player2")

    //* Loop diagonally from top/left:
    for (i = 0; i < 3; i++){
      line += board[i][i]
    }
    verifyLine()
    //* Loop diagonally from top/right:
    let z = 0;
    for (i = 2; i >= 0; i--){
        line += board[z][i]
        z++
    } 
    verifyLine()
    //* Loop through columns
    for (i = 0; i < 3 ; i++){
      const columns = board.map(array => array[i]);
      line = columns.toString();
      verifyLine()
    }

    //* Loop through rows:
    for (i = 0; i < 3 ; i ++){ 
      line = board[i].toString();
      verifyLine()
    }
    line = '';

    function verifyLine(){
      if (line === "XXX" || line === "X,X,X"){
        winner.innerText = `${player1.name} Wins`
        stopScreenDisplay.style.display = 'flex'
        player1.streak++
        streakPlayer1.innerText = player1.streak
        return 
      }
      else if (line === "OOO" || line === "O,O,O"){
        winner.innerText = `${player2.name} Wins`
        stopScreenDisplay.style.display = 'flex'
        player2.streak++
        streakPlayer2.innerText = player2.streak
        return
      }
      line = '';
    }

    function drawGame(){
      let cellsContent = []
      let boardIsFull = false
      for (i = 0; i < 3 ; i++){
        
        for (j = 0; j < 3; j++){
          cellsContent.push(board[i][j])
        }
      }
      boardIsFull = cellsContent.every(cell => cell === "X" || cell === "O");
      console.log(cellsContent)
      if(boardIsFull === true){
        stopScreenDisplay.style.display = 'flex'
        winner.innerText = `DRAW`
        resetBoard()
      }
    }
    drawGame()
  }

  //+ Reset the GameBoard:
  const resetBoard = function(){
    for (i = 0 , j = 1; i < 9 && j < 10; i++ , j++){
      let cell = document.querySelector(`.cell-${i}`)
      cell.innerText = j.toString()
    }
    return console.log(board)
  }

  function switchPlayer(){
    if (actualPlayer === player2)
    actualPlayer = player1
    else{actualPlayer = player2}
    }

  // function changeCellStyle(){
  //   for (i = 0; i < 9; i++){
  //     let cell = document.querySelector(`.cell-${i}`)
  //     cell.addEventListener("click", () => cell.style.backgroundColor ="red")
  //   }
  // }

  function displayNames(){
    player1Name.innerHTML = player1.name
    player2Name.innerHTML = player2.name
  }

  function hidePopup(){
    let popup = document.querySelector(".player-details")
    if (firstInput !== '' || secondInput !== ''){
    popup.style.display = "none"
    console.log("hello")
    }
  }
  //+ Functions Invocation:
  fillPlayerName()
  placeTokenOnScreen()
  displayNames()
  hidePopup()
  let entireBoard = document.getElementById("game-board")
  let newGame = document.querySelector('.new-game')
  let stopScreenDisplay = document.querySelector(".stop-game")
  let startBtn = document.getElementById("start-btn")
  entireBoard.addEventListener("click" , placeTokenOnScreen)
  entireBoard.addEventListener("click" , makeGameBoard)
  entireBoard.addEventListener("click" , checkWinner)
  startBtn.addEventListener("click", hidePopup)
  newGame.addEventListener("click", function(){
    stopScreenDisplay.style.display = 'none';
    resetBoard()
  })
  return {player1, player2}
}


let startBtn = document.getElementById("start-btn")
startBtn.addEventListener("click", TicTacToe)


function displayPaw(){
  setTimeout(() => {document.querySelector(".paw1").style.visibility = "visible"}, 500)
  setTimeout(() => {document.querySelector(".paw2").style.visibility = "visible"}, 1000)
  setTimeout(() => {document.querySelector(".paw3").style.visibility = "visible"}, 1500)

  setTimeout(() => {document.querySelector(".Tic").style.visibility = "visible"}, 2000)
  setTimeout(() => {document.querySelector(".Tac").style.visibility = "visible"}, 2500)
  setTimeout(() => {document.querySelector(".Toe").style.visibility = "visible"}, 3000)

  setTimeout(() => {document.querySelector(".paw4").style.visibility = "visible"}, 3500)
  setTimeout(() => {document.querySelector(".paw5").style.visibility = "visible"}, 4000)
  setTimeout(() => {document.querySelector(".paw6").style.visibility = "visible"}, 4500)
}

setTimeout(displayPaw(), 1000)