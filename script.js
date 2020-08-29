/* stores current active player*/
let player = -1;

/* stores and initializes big littleBoards information*/
let bigBoard = new Array(9);
for(let i = 0; i < bigBoard.length; i++){
  bigBoard[i] = 0;
}
console.log(bigBoard);

/* stores and initializes all little littleBoards information*/
let littleBoards = new Array(9);
for(let i = 0; i < littleBoards.length; i++) {
  littleBoards[i] = new Array(9);
  for(let j = 0; j < littleBoards[i].length; j++){
    littleBoards[i][j] = 0;
  }
}

/* logs littleboards array to console for debugging*/ 
function printlittleBoards() {
  console.log(littleBoards);
}


/* */
function test(id, color = "white") {
  playerClick(id);
}

function getPlayer() {
  return player;
}

function playerClick(id) {
  let boardNum = parseInt(id[0]);
  let cellNum = parseInt(id[1]);

  console.log("Board number: " + boardNum + "\nCell number: " + cellNum + '\n');

  littleBoards[boardNum][cellNum] = player;
  printlittleBoards();
  console.log(checkSmall(boardNum));
  console.log(bigBoard);
  console.log(checkBig());
}

function addMove(id) {
  let cell = document.getElementById(id);
  if(getPlayer() == 'x') {
    cell.className += ' x';
  }
  else {
    cell.className += ' o';
  }
  
  
  checkSmall(id, player);
}

function confirmMove() {
  /* 
    1. Update the littleBoards with the new move
    2. Check if new move makes 3 in a row on small littleBoards

  
  */
}

/* 
Called every time a player makes a 
move to check if there is a three-in 
*/
function checkSmall(boardNum) {
  if (
    (littleBoards[boardNum][0] == player && littleBoards[boardNum][1] == player && littleBoards[boardNum][2] == player) ||
    (littleBoards[boardNum][3] == player && littleBoards[boardNum][4] == player && littleBoards[boardNum][5] == player) ||
    (littleBoards[boardNum][6] == player && littleBoards[boardNum][7] == player && littleBoards[boardNum][8] == player) ||
    (littleBoards[boardNum][0] == player && littleBoards[boardNum][3] == player && littleBoards[boardNum][6] == player) ||
    (littleBoards[boardNum][1] == player && littleBoards[boardNum][4] == player && littleBoards[boardNum][7] == player) ||
    (littleBoards[boardNum][2] == player && littleBoards[boardNum][5] == player && littleBoards[boardNum][8] == player) ||
    (littleBoards[boardNum][0] == player && littleBoards[boardNum][4] == player && littleBoards[boardNum][8] == player) ||
    (littleBoards[boardNum][2] == player && littleBoards[boardNum][4] == player && littleBoards[boardNum][6] == player)) {
  bigBoard[boardNum] = player;
  return true;
 } 
 return false;
}

/*
Called every time a small littleBoards is completed
to determine if either player has won the game
with three-in-a-row on the big littleBoards
*/
function checkBig(){
  if (
    (bigBoard[0] == player && bigBoard[1] == player && bigBoard[2] == player) ||
    (bigBoard[3] == player && bigBoard[4] == player && bigBoard[5] == player) ||
    (bigBoard[6] == player && bigBoard[7] == player && bigBoard[8] == player) ||
    (bigBoard[0] == player && bigBoard[3] == player && bigBoard[6] == player) ||
    (bigBoard[1] == player && bigBoard[4] == player && bigBoard[7] == player) ||
    (bigBoard[2] == player && bigBoard[5] == player && bigBoard[8] == player) ||
    (bigBoard[0] == player && bigBoard[4] == player && bigBoard[8] == player) ||
    (bigBoard[2] == player && bigBoard[4] == player && bigBoard[6] == player)) {
    return true;
 } 
 return false;
}