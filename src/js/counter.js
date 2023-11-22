let contador = 0;

const Result=()=>{
    document.getElementById('number').innerHTML = contador;

}
function add() {
    contador++;
    Result()
  
}

function reset() {
    contador = 0; // Actualiza el valor de contador a cero
    Result();
  

}

function decrease() {
    
    if (contador > 0) {
        contador--;
        Result();
    } else {
        Result();
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