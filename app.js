let count = 0;

const btns = document.querySelectorAll('.btn')
const value = document.getElementById('value')

btns.forEach(function(btn){
 btn.addEventListener("click", function(e){
   const trigger = e.currentTarget.classList;

    if (trigger.contains("decrease")){
        count--;

    } else if(
        trigger.contains('increase')){
            count++
    } else {
        count = 0;
    }
    if (count < 0){
        value.style.color = 'red';
    }
    if ( count > 0) {
        value.style.color = 'green'
    }

    if ( count === 0){
        value.style.color = 'black'
    }

        value.textContent = count
})
})