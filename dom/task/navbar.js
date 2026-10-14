const navbar=document.createElement("nav")

// logo design
const logo=document.createElement("div")
logo.innerText="LOGO"
logo.setAttribute("class","logo")

// nav-list design

const navlist=["home","about","contact","services","help"]
const navlist_UL=document.createElement("ul")
navlist_UL.setAttribute("class","navlist")

for(let item of navlist){
    const li=document.createElement("li")
    li.innerText=item
    navlist_UL.append(li)
}

// sign-in sign-out btns

const btns_block=document.createElement("div")
btns_block.setAttribute("class","btn-block")

const sign_in=document.createElement("button")
const sign_up=document.createElement("button")

sign_in.innerText="sign-in"
sign_up.innerText="sign-up"

sign_in.setAttribute("class","sign-in-btn")
sign_up.setAttribute("class","sign-up-btn")

btns_block.append(sign_in,sign_up)

navbar.append(logo,navlist_UL,btns_block)

sign_in.addEventListener("click",()=>{
   window.location.href="./login.html"
})
sign_up.addEventListener("click",()=>{
    window.location.href="./register.html"
})

document.body.append(navbar)