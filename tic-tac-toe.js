window.onload=function myFunction(){
    const status = document.getElementById("status"); 
    const board  = document.getElementById("board");
    const newgame = document.getElementsByClassName("btn")[0];
    let shapes = board.querySelectorAll('div');
    //let shapes = new Array();
    let gamestate = new Array ();
    let currentplay = 'X';
    
    
    
    
    for (let i = 0; i <= 8; i++){
        shapes[i].classList.add('square');
    }
    //console.log(shapes);
    
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
    

    function GameBoard(elem, index){ 
        console.log(elem.textContent);       
        if (!elem.textContent){
            elem.textContent = currentplay;
            elem.classList.add('square', currentplay); //Add a class for colour.
            //elem[index].textContent.style.classList.add('square.X');
            gamestate[index] = currentplay;
            console.log(gamestate);
            currentplay = currentplay === 'X' ? 'O': 'X';
         
        }
    }




}




