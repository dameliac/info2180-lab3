window.onload=function myFunction(){
    //initializing variables from the html document.
    const status = document.getElementById("status"); 
    const board  = document.getElementById("board");
    const newgame = document.getElementsByClassName("btn")[0];
    let shapes = board.querySelectorAll('div');
    //initializing elements 
    let gamestate = new Array ();
    let currentplay = 'X';
    
    
    
    //adding the squares to the board.
    for (let i = 0; i <= 8; i++){
        shapes[i].classList.add('square');
    }
    
    //alternating X's and O's. 
    function GameBoard(elem, index){ 
        console.log(elem.textContent);       
        if (!elem.textContent){
            elem.textContent = currentplay;
            elem.classList.add('square', currentplay); //Add a class for colour.
            gamestate[index] = currentplay;
            console.log(gamestate);
            checkWinner();
            currentplay = currentplay === 'X' ? 'O': 'X';
         
        }
    }

    //events handling, when the square is clicked or when the mouse hovers over the square.
    shapes.forEach(function(elem,index){
        elem.addEventListener('click', function(){
            GameBoard(elem,index)});
        elem.addEventListener('mouseover', function(i){
            i.target.classList.add('hover');
        });
        elem.addEventListener('mouseout', function(i){
            i.target.classList.remove('hover');
        });
    });
    
    //checking for the winner
    function checkWinner(){
        let isGameOver = null;
        const winCombin = [
            [0,1,2],//first row
            [3,4,5], //second row
            [6,7,8],//third row
            [0,3,6], //left column
            [1,4,7], //middle column
            [2,5,8],//right column
            [0,4,8],//diagonal from top-left to bottom-right
            [2,4,6],//diagonal from top-right to bottom-left
        ];
        let [a,b,c] = new Array();
        let i = 0;


      
        for(const combin of winCombin){
            [a,b,c] = combin;
            //if there are spaces in the box, it is not considered. 
            if(gamestate[a] == '' && gamestate[b] == '' && gamestate[c]== '' || gamestate[a] == '' && gamestate[b] == '' && gamestate[c]== '' ){
                isGameOver = false;
                 
             //if element of the winning combination is the same as the X's or O's then it is a win.           
            }else if(gamestate[a] == 'X' && gamestate[b] == 'X' && gamestate[c]== 'X' || gamestate[a] == 'O' && gamestate[b] == 'O' && gamestate[c]== 'O' ){
                isGameOver = true;
                status.textContent = 'Congratulations! ' + gamestate[a] + ' is the Winner!';
                status.classList.add('you-won');
                console.log(isGameOver);
                    
            }             
        }
            
          
        console.log(isGameOver);
      
      
   }
    
       
        

        


    


}




