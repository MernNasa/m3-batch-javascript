// function debounce(fn, delay) {
//   let timerId;
  
//   return function (...args) {
//      Reset the timer every time the event is fired rapidly
//     clearTimeout(timerId);
    
//     Set a new timer
//     timerId = setTimeout(() => {
//       fn.apply(this, args); // Execute function after inactivity
//     }, delay);
//   };
// }




const search =document.getElementById("search")

function debounce(fu,delay){
    let timerId;
    return function (...args){
        clearTimeout(timerId)

        timerId=setTimeout(()=>{
            fu.apply(this,args)
        },delay)
    }
}



function searchElement(e){
     console.log(e.target.value)
}

let debounceSearch=debounce(searchElement,500)

search.addEventListener("input",searchElement)