console.log("Welcome to the game");

let audioTurn = new Audio("/js_projects/ticTacToe/add.mp3")
let gameover = new Audio("/js_projects/ticTacToe/gameover.mp3")
let turn = "X";
let isgameover = false;

//function to change the turn
const changeTurn = () => {

    return turn === "X" ? "0" : "X"
}
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
     let boxtext = element.querySelector(' .boxtext ');
     element.addEventListener('click', ()=> {
         if(boxtext.innerText === '') {
             boxtext.innerText = turn;
             turn = changeTurn();   //to get turn of each
             audioTurn.play();
             checkWin();
             if(!isgameover) {
             document.getElementsByClassName("info")[0].innerText = "Turn for " +turn;
         }
        }
     });
});
