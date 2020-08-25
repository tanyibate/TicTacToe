//globals
let playerTurn = "playerOne";
let playerMark = "X"; // these two variables are to show which players turn it is.
let curentlyPlaying = false;
let clicked = {};
let playerOneName = document.querySelector("#playerOne input");
let playerOneTwo = document.querySelector("#playerTwo input");
let playerOneScoreDisplay = document.querySelector("#playerOne h1");
let playerTwoScoreDisplay = document.querySelector("#playerTwo h1");
let playerWon = "";
let playerOneScore = 0;
let playerTwoScore = 0;
let notifyPlayers = document.querySelector(".notifyPlayers");
let notifyPlayersText = document.querySelector(".notifyPlayers p");
let gameFrozen = false;
notifyPlayers.onclick = function(){
    startGame();
}

//playerOneScore.innerHTML = "Score: 1"

function startGame(){
    initialise();
    notifyPlayersText.innerHTML = "Player 1's Turn";
    notifyPlayers.onclick = "";
}

function freeze(){ // freezes game after a player has won
    const cells = document.querySelectorAll("td")
    for (const cell of cells) {
        cell.onclick = "";
        cell.onmouseout = "";
        cell.onmouseover = "";
    }
    gameFrozen = true;
}

function resetGame(){
    playerMark = "X";
    notifyPlayersText.innerHTML = "Player 1's Turn";
    for(let i=1; i < 10; i++){
        let cellName = "#cell" + i;
        let cell = document.querySelector(cellName);
        cell.innerHTML = "";
        cell.style.color = "white";  
        clicked = {};
    }
    initialise();
}



function initialise(){
    
    for(let i=1; i < 10; i++){
        let cellName = "#cell" + i;
        let cell = document.querySelector(cellName);
        cell.onclick = function(){
            if(clicked[`#${cell.id}`] != true ){
                this.style.color = "black";
                mark(this);
                clicked[`#cell${i}`] = true;
                win();
            }
            
        }
        /* This two functions below check wether the cell has already been filled with an X or O so
        the highlighting functionality should not work 
        */
        cell.onmouseover = function(){
            if(clicked[`#${cell.id}`] != true ){
                this.style.color = 'gray';
                mark(this);  
            }   
        }
        cell.onmouseout = function(){
            
            if(clicked[`#${cell.id}`] != true ){
                this.style.color = 'gray';
                unmark(this); 
            }
             
        }   
    }
}







/*var table = document.getElementById("game");  another method of assigning table elements functionality
using their row and column index
if (table != null) {
    for (var i = 0; i < table.rows.length; i++) {
        for (var j = 0; j < table.rows[i].cells.length; j++){
        table.rows[i].cells[j].onmouseover = function () {
            this.style.color = 'gray';
            mark(this);
        };
        table.rows[i].cells[j].onmouseout = function () {
            unmark(this);
        };}
    }
}*/

function mark(cell) {// to make an X or O inside a cell
    cell.innerHTML = playerMark;
    cell.style.fontSize = "100px";
    
}

function unmark(cell) { // if a cell is highlighted to remove the gray X or O
    cell.innerHTML = "";
}

function win(){
    
    
    if(winDiagonally() == true || winHorizontally() == true || winVertically() == true || winDiagonally2() == true){
        if(playerMark == "X"){
            playerOneScore++;
            playerOneScoreDisplay.innerHTML = `Score: ${playerOneScore}`;
            freeze();
            notifyPlayersText.innerHTML = "Player 1 won, play again?";
            
        }
        else {
            playerTwoScore++;
            playerTwoScoreDisplay.innerHTML = `Score: ${playerTwoScore}`;
            notifyPlayersText.innerHTML = "Player 2 won, play again?"
            freeze();
            
        }
        notifyPlayers.onclick = function(){
            resetGame();
        }
     
    }
    else changePlayer();
}

function winHorizontally(){ // function to check if three X or O are line up horizontally

    for(let i = 1; i < 8; i+=3){
        let cell1 = document.querySelector("#cell" + i);
        let cell2 = document.querySelector("#cell" + (i+1));
        let cell3 = document.querySelector("#cell" + (i+2));
        if(cell1.innerHTML == playerMark && cell2.innerHTML == playerMark && cell3.innerHTML == playerMark){
            return true;
        }
        
    }return false;
}

function winVertically(){
    for(let i = 1; i < 4; i++){
        let cell1 = document.querySelector("#cell" + i);
        console.log(cell1.innerHTML + cell1.id)
        let cell2 = document.querySelector("#cell" + (i+3));
        let cell3 = document.querySelector("#cell" + (i+6));
        console.log(cell2.innerHTML + cell2.id)
        console.log(cell3.innerHTML + cell3.id)
        if(cell1.innerHTML == playerMark && cell2.innerHTML == playerMark && cell3.innerHTML == playerMark){
            return true;
        }
        
    } return false;
}

function winDiagonally(){
    let cell1 = document.querySelector("#cell1");
    let cell2 = document.querySelector("#cell5");
    let cell3 = document.querySelector("#cell9");
    if(cell1.innerHTML == playerMark && cell2.innerHTML == playerMark && cell3.innerHTML == playerMark){
        return true;
    }
    return false;
}

function winDiagonally2(){
    let cell1 = document.querySelector("#cell3");
    let cell2 = document.querySelector("#cell5");
    let cell3 = document.querySelector("#cell7");
    if(cell1.innerHTML == playerMark && cell2.innerHTML == playerMark && cell3.innerHTML == playerMark){
        return true;
    }
    return false;

}

function changePlayer(){
    if(playerMark == "X"){
        playerMark = "O";
        notifyPlayersText.innerHTML = "Player 2's turn";
    }
    else{
        playerMark = "X";
        notifyPlayersText .innerHTML = "Player 1's turn";
    } 
    
    
}




