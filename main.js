//globals
let playerTurn = "playerTwo";
let curentlyPlaying = false;
let clicked = {};

class Player{ 
    constructor(name, score = 0){
        this._name = name;
        this._score = score;
    }

    set score(score){
        this._score = score;
    }

}

for(let i=1; i < 10; i++){
    let cellName = "#cell" + i;
    let cell = document.querySelector(cellName);
    cell.onclick = function(){
        this.style.color = "black";
        mark(this);
        [`#cell${i}`].cellName = true;
        
    }
    
    cell.onmouseover = function(){
        this.style.color = 'gray';
        mark(this);  
    }
    cell.onmouseout = function(){
        this.style.color = 'gray';
        unmark(this);  
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

function mark(cell) {
    if(playerTurn=="playerOne"){
        cell.innerHTML = "X";
    }
    else cell.innerHTML = "O";
    cell.style.fontSize = "100px";
    
}

function unmark(cell) {
    cell.innerHTML = "";
}




