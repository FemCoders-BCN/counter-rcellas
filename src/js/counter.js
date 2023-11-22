let contador = 0;

const Result=()=>{
    document.getElementById('number').innerHTML = contador;

}
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

document.addEventListener("DOMContentLoaded", (event) => {
    const buttonFirstChild = document.querySelector('.buttons > button:first-child')
    const buttonLastChild = document.querySelector('.buttons > button:last-child')
    const buttonChild = document.querySelector('.buttons > button:nth-child(2)')
    buttonFirstChild.addEventListener('click', decrease)
    buttonLastChild.addEventListener('click', add)
    buttonChild.addEventListener('click', reset)
  });

  export{add, reset, decrease}                      