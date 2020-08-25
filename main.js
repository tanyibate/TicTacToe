//globals
let playerTurn = "playerOne";
let playerMark = "X";
let curentlyPlaying = false;
let clicked = {};
let playerOneName = document.querySelector("#playerOne input");
let playerOneTwo = document.querySelector("#playerTwo input");
let playerOneScore = document.querySelector("#playerOne h1");
let playerTwoScore = document.querySelector("#playerTwo h1");
let playerWon = "";
//playerOneScore.innerHTML = "Score: 1"



class Player{ 
    constructor(name, mark, score = 0, playing = false){
        this._name = name;
        this._score = score;
        this._mark = mark;
        this._playing = playing;

    }

    set score(score){
        this._score = score;
    }

    get score(){
        return this._score;
    }

    get playing(){
        return this._playing
    }

    set playing(playing){
        this._playing = playing;
    }
}

let playerOne = new Player(playerOneName,"X"); // initialise players
let playerTwo = new Player(playerTwoName,"O");

function startGame(){
    playerOne.playing = true;
    playerMark = playerOne.mark;    
}





function initialise(){
    for(let i=1; i < 10; i++){
        let cellName = "#cell" + i;
        let cell = document.querySelector(cellName);
        cell.onclick = function(){
            this.style.color = "black";
            mark(this);
            clicked[`#cell${i}`] = true;
            win();
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


function changePlayer(){
    if(playerOne.playing == true){
        playerTwo.playing = true;
        playerOne.playing = false;
    }
    else {
        playerOne.playing = true;
        playerTwo.playing = false;
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
        alert("you won");
        if(playerOne.playing== true) playerOne.score += 1;
        else playerTwo.score += 1;
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
        return false;
    }
}

function winVertically(){
    for(let i = 1; i < 4; i++){
        let cell1 = document.querySelector("#cell" + i);
        let cell2 = document.querySelector("#cell" + (i+3));
        let cell3 = document.querySelector("#cell" + (i+6));
        if(cell1.innerHTML == playerMark && cell2.innerHTML == playerMark && cell3.innerHTML == playerMark){
            return true;
        }
        return false;
    }
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




