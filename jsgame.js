let sign = "X";
//let player = "X";
// let computer = "O";
let disp = document.getElementById("player");
// let score = document.getElementById('score');
// let restart = document.getElementById("restart");
// let scoreboard = {
//     player:0,
//     computer:0
// }

function printx(num) {
    let click = document.getElementById("r"+num);
    console.log(click);
    if(click.innerText == "") {
        click.innerText=sign;
        getComputerChoice();
        winner();
        //checkSign();
        //disp.innerHTML = sign + " Turn";
    }
}

// function checkSign() {
//     if(sign == "X")
//         sign = "O";
//     else
//         sign = "X";
// }

function getComputerChoice() {
    let rand = Math.random();
    let r =new Array;
    for(let i = 1; i <= 9; i++) {
        r[i] = document.getElementById("r"+i);
    }
    // Its first choice will be r[5]
    if(r[5].innerText == "" )   
    {
        r[5].innerText = "O";
        if((r[5].innerText == "O" )&&((r[1].innerText == "X" && r[9].innerText == "X") || (r[2].innerText == "X" && r[8].innerText == "X") || (r[3].innerText == "X" && r[7].innerText == "X") || (r[4].innerText == "X" && r[6].innerText == "X")))
        {
            // Random value without r[5]
            if(r[1].innerText == "" && 0<=rand<=0.125 )
                r[1].innerText = "O";
            else if(r[2].innerText == "" && rand<=0.25 )
                r[2].innerText = "O";
            else if(r[3].innerText == "" && rand<=0.375 )
                r[3].innerText = "O";
            else if(r[4].innerText == "" && rand<=0.5 )
                r[4].innerText = "O";

            else if(r[6].innerText == "" && rand<=0.625 )
                r[6].innerText = "O";
            else if(r[7].innerText == "" && rand<=0.75 )
                r[7].innerText = "O";
            else if(r[8].innerText == "" && rand<=0.875 )
                r[8].innerText = "O";
            else if(r[9].innerText == "" && rand<=1 ) 
                r[9].innerText = "O";
        }
    } 
    // For two consecutiv values
    else if((r[1].innerText == "" )&&((r[2].innerText == "O" && r[3].innerText == "O") || (r[5].innerText == "O" && r[9].innerText == "O") || (r[4].innerText == "O" && r[7].innerText == "O")||(r[2].innerText == "X" && r[3].innerText == "X") || (r[5].innerText == "X" && r[9].innerText == "X") || (r[4].innerText == "X" && r[7].innerText == "X") ) )
        r[1].innerText = "O";

    else if((r[2].innerText == "" )&&((r[1].innerText == "O" && r[3].innerText == "O") || (r[5].innerText == "O" && r[8].innerText == "O")||(r[1].innerText == "X" && r[3].innerText == "X") || (r[5].innerText == "X" && r[8].innerText == "X") ) )
        r[2].innerText = "O";

    else if((r[3].innerText == "" )&&((r[1].innerText == "O" && r[2].innerText == "O") || (r[5].innerText == "O" && r[7].innerText == "O") || (r[6].innerText == "O" && r[9].innerText == "O")||(r[1].innerText == "X" && r[2].innerText == "X") || (r[5].innerText == "X" && r[7].innerText == "X") || (r[6].innerText == "X" && r[9].innerText == "X") ) )
        r[3].innerText = "O";

    else if((r[4].innerText == "" )&&((r[1].innerText == "O" && r[7].innerText == "O") || (r[5].innerText == "O" && r[6].innerText == "O")||(r[1].innerText == "X" && r[7].innerText == "X") || (r[5].innerText == "X" && r[6].innerText == "X") ) )
        r[4].innerText = "O";

    else if((r[5].innerText == "" )&&((r[1].innerText == "O" && r[9].innerText == "O") || (r[2].innerText == "O" && r[8].innerText == "O") || (r[3].innerText == "O" && r[7].innerText == "O") || (r[4].innerText == "O" && r[6].innerText == "O")||(r[1].innerText == "X" && r[9].innerText == "X") || (r[2].innerText == "X" && r[8].innerText == "X") || (r[3].innerText == "X" && r[7].innerText == "X") || (r[4].innerText == "X" && r[6].innerText == "X") ) )
        r[5].innerText = "O";

    else if((r[6].innerText == "" )&&((r[3].innerText == "O" && r[9].innerText == "O") || (r[4].innerText == "O" && r[5].innerText == "O")||(r[3].innerText == "X" && r[9].innerText == "X") || (r[4].innerText == "X" && r[5].innerText == "X") ) )
        r[6].innerText = "O";

    else if((r[7].innerText == "" )&&((r[1].innerText == "O" && r[4].innerText == "O") || (r[3].innerText == "O" && r[5].innerText == "O") || (r[8].innerText == "O" && r[9].innerText == "O")||(r[1].innerText == "X" && r[4].innerText == "X") || (r[3].innerText == "X" && r[5].innerText == "X") || (r[8].innerText == "X" && r[9].innerText == "X") ) )
        r[7].innerText = "O";

    else if((r[8].innerText == "" )&&((r[2].innerText == "O" && r[5].innerText == "O") || (r[7].innerText == "O" && r[9].innerText == "O")||(r[2].innerText == "X" && r[5].innerText == "X") || (r[7].innerText == "X" && r[9].innerText == "X") ) )
        r[8].innerText = "O";

    else if((r[9].innerText == "" )&&((r[1].innerText == "O" && r[5].innerText == "O") || (r[3].innerText == "O" && r[6].innerText == "O") || (r[7].innerText == "O" && r[8].innerText == "O")||(r[1].innerText == "X" && r[5].innerText == "X") || (r[3].innerText == "X" && r[6].innerText == "X") || (r[7].innerText == "X" && r[8].innerText == "X") ) )
        r[9].innerText = "O";

    // For random value
    else if(r[1].innerText == "" && 0<=rand<=0.11111 )
        r[1].innerText = "O";
    else if(r[2].innerText == "" && rand<=0.22222 )
        r[2].innerText = "O";
    else if(r[3].innerText == "" && rand<=0.33333 )
        r[3].innerText = "O";
    else if(r[4].innerText == "" && rand<=0.44444 )
        r[4].innerText = "O";
    else if(r[5].innerText == "" && rand<=0.55556 )
        r[5].innerText = "O";
    else if(r[6].innerText == "" && rand<=0.66667 )
        r[6].innerText = "O";
    else if(r[7].innerText == "" && rand<=0.77778 )
        r[7].innerText = "O";
    else if(r[8].innerText == "" && rand<=0.88889 )
        r[8].innerText = "O";
    else if(r[9].innerText == "" && rand<=1 ) 
        r[9].innerText = "O"; 
           
}

function getBox(no) {
    return document.getElementById("r"+no).innerHTML;
}

function checkMove(a,b,c,m) {
    if(getBox(a)==m && getBox(b)==m && getBox(c)==m)
    return true;
    else
    return false;
}

function winner() {
    if(checkMove(1,2,3,"X") || checkMove(4,5,6,"X") || checkMove(7,8,9,"X") || checkMove(1,4,7,"X") || checkMove(2,5,8,"X") || checkMove(3,6,9,"X") || checkMove(1,5,9,"X") || checkMove(3,5,7,"X") ) {
        disp.innerHTML = "X is the Winner";
        for(let i = 1; i <= 9; i++) {
            document.getElementById("r"+i).innerHTML = "";
        }
        // alert("X is the Winner");
        throw "Game Finished";
    }

    if(checkMove(1,2,3,"O") || checkMove(4,5,6,"O") || checkMove(7,8,9,"O") || checkMove(1,4,7,"O") || checkMove(2,5,8,"O") || checkMove(3,6,9,"O") || checkMove(1,5,9,"O") || checkMove(3,5,7,"O") ) {
        disp.innerHTML = "O is the Winner";
        for(let i = 1; i <= 9; i++) {
            document.getElementById("r"+i).innerHTML = "";
        }
        // alert("O is the Winner");
        throw "Game Finished";
    }

    else if(getBox(1)!="" && getBox(2)!="" && getBox(3)!="" && getBox(4)!="" && getBox(5)!="" && getBox(6)!="" && getBox(7)!="" && getBox(8)!="" && getBox(9)!="" ) {
        disp.innerHTML = "It's a Draw";
        for(let i = 1; i <= 9; i++) {
            document.getElementById("r"+i).innerHTML = "";
        }
        // alert("Draw");
        throw "Draw";
    }
}

// function restartGame(){
//     scoreboard.player = 0;
//     scoreboard.computer = 0;
//     score.innerHTML = `
//     <p>X points : 0</p>
//     <p>O points : 0</p>
//     `;
// }

// restart.addEventListener('click',restartGame);