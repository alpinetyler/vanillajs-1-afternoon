var board = [];


function play(clickedId){
    var playerSpan = document.getElementById('player')
    var clickedElement = document.getElementById(clickedId)
   
    if(playerSpan.innerText === 'X'){
        playerSpan.innerText = 'O'
        clickedElement.innerText = 'X'
        board[clickedId] = 'X';
    }else{
        playerSpan.innerText = 'X'
        clickedElement.innerText = 'O'
        board[clickedId] = 'O';
    }
    
console.log(board);

var topLeft = board[0];
var topCenter = board[1];
var topRight = board[2];
var middleLeft = board[3];
var middleCenter = board[4];
var middleRight = board[5];
var bottomLeft = board[6];
var bottomCenter = board[7];
var bottomRight = board[8];

//check the winning combinations
if(topLeft !== undefined && topLeft === topCenter && topCenter === topRight){
    alert(`${topLeft} is the winner!`)
  
}
if(topLeft !== undefined && topLeft === middleCenter && middleCenter === bottomLeft){
    alert(`${topLeft} is the winner!`)
}
if(topLeft !== undefined && topLeft === middleCenter && middleCenter === bottomRight){
    alert(`${topLeft} is the winner!`)
}
if(topCenter !== undefined && topCenter === middleCenter && middleCenter === bottomCenter){
    alert(`${topCenter} is the winner!`)
}
if(topRight !== undefined && topRight === middleRight && middleRight === bottomRight){
    alert(`${topRight} is the winner!`)
}
if(topRight !== undefined && topRight === middleCenter && middleCenter === bottomLeft){
    alert(`${topRight} is the winner!`)
}
if(middleLeft !== undefined && middleLeft === middleCenter && middleCenter === middleRight){
    alert(`${leftCenter} is the winner!`)
}
if(bottomLeft !== undefined && bottomLeft === bottomCenter && bottomCenter === bottomRight){
    alert(`${bottomleft} is the winner!`)
}

//check to see if the board is full
var boardFull = true;
for(let i = 0; i <= 8; i++){
    if(board[i] === undefined){
        boardFull = false;
        }
    }
    if(boardFull === true){
        alert("Cat Wins!")
    }
}


