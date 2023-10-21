window.onload=function myFunction(){
    const status = document.getElementById("status");
    const board  = document.getElementById("board");
    const newgame = document.getElementsByClassName("btn");
    const shapes = board.querySelectorAll('div');
    
    for (let i = 0; i <= 9; i++){
        shapes[i].setAttribute("class", "square");
    }
    

}




