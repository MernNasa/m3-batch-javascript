
// const paynow_btn=document.getElementById("paynow_btn")
// const h1=document.getElementById("count")

// function throttling(fun,delay){
//     let lastcall=0
//     return function(...args){
//         const now=Date.now();
//         if(now-lastcall>=delay){
//             fun.apply(this,args)
//             lastcall=now
//         }
//     }
// }

// let throttledFunction=throttling(payment,5000)
// let count=0
// function payment(){
//     count++
//     h1.innerText=count
//     console.log("payment function called ")
// }

// paynow_btn.addEventListener("click",throttledFunction)

const navbar=document.querySelector("nav")

function throttling(fun,delay){
    let lastcall=0
    return function(...args){
        const now=Date.now();
        if(now-lastcall>=delay){
            fun.apply(this,args)
            lastcall=now
        }
    }
}

let throttledFunction=throttling(bgChange,500)
let mouse=document.getElementById("mouse")
function bgChange(e){
   const color=randomColor()
   navbar.style.backgroundColor=color
   mouse.innerText=`${e.clientX} : ${e.clientY }`
}


function randomColor(){
    const red = Math.floor(Math.random()*256)
    const green = Math.floor(Math.random()*256)
    const blue = Math.floor(Math.random()*256)
    return `rgb(${red},${green},${blue})`
}
// window.addEventListener("scroll",throttledFunction)
window.addEventListener("mousemove",throttledFunction)