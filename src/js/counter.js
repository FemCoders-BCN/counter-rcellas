
function add() {
    const number = document.getElementById('number');
    number.innerHTML++;
  
}

function reset() {
    const number = document.getElementById('number');
    number.innerHTML = 0;
  

}

function decrease() {
    
    const number = document.getElementById('number');
    if(number.innerHTML == 0){
        number.innerHTML = 0;
    } else {
        number.innerHTML --;
    }
}                  