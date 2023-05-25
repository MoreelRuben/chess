window.addEventListener('DOMContentLoaded', init);


function init(){
 

  generateChessboard(8, "chessboard");
}


function generateChessboard(size, targetElementId) {
    const board = [];

    let pieces = [[null, "assassin", null, null, null, null, "guardian", null], [null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null]]
  
    const targetElement = document.getElementById(targetElementId);
    if (!targetElement) {
      console.error(`Target element "${targetElementId}" not found.`);
      return;
    }
  
    for (let row = 0; row < size; row++) {
      const rowData = [];
      for (let col = 0; col < size; col++) {
        let symnbol = null;
        if(pieces[row][col] == null){
            symbol = document.createElement("div");
        }
        else{
            symbol = document.createElement("img");
            symbol.src = pieces[row][col] + ".png"
            symbol.classList.add("red")
        }
        rowData.push(symbol);
      }
      board.push(rowData);
    }
  
    const chessboardElement = document.createElement("div");
    chessboardElement.className = "chessboard";
  
    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        const tileElement = document.createElement("div");
        tileElement.className = (row + col) % 2 === 0 ? "white-tile" : "black-tile";
        tileElement.appendChild(board[row][col]);
        chessboardElement.appendChild(tileElement);
      }
    }
  
    targetElement.appendChild(chessboardElement);
  }
  

  