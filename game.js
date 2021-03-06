let audioTurn = new Audio("add.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X";
let isgameover = false;

//function to change the turn
const changeTurn = () => {

    return turn === "X" ? "0" : "X"
}

//function to check who wins

const checkWin = () => {
    //check logic of wining by knowing position of x and 0 
   let boxtext = document.getElementsByClassName('boxtext')
     let wins = [
         [0,1,2], 
         [3,4,5], 
         [6,7,8],
         [0,4,8],
         [2,4,6],
         [0,3,6],
         [1,4,7],
         [2,5,8]
    ]
    //wins contains all the situactions of wining the game here
    wins.forEach ( e => {
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && 
        (boxtext[e[2]].innerText === boxtext[ e[1]].innerText) &&
        (boxtext[ e[0]].innerText !== '') ){
            document.querySelector('.info').innerText = boxtext[ e[0]].innerText + " has won the game " ;
            isgameover = true;
            gameover.play();          
            //On wining the game getting the gif for g-congratulating the winner
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "250px"
          
        }
    })
    }
    

//Main logic to work the game
 
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
     let boxtext = element.querySelector(' .boxtext ');
     element.addEventListener('click', ()=> {
         if(boxtext.innerText === '') {
             boxtext.innerText = turn;
             boxtext.style.color = "blue";
             turn = changeTurn();   //to get turn of each
             audioTurn.play();
             checkWin();
             if(!isgameover) {
             document.getElementsByClassName("info")[0].innerText = "Turn for " +turn;   //changing turns of players
         }
        }
     });
});

//reset
reset.addEventListener( 'click', ()=> {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";

    });
    
    turn = "X"
    isgameover = false;
        document.getElementsByClassName("info")[0].innerText = "Turn for " +turn;
         document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
        
});




