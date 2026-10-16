

const mainsection=document.createElement("div")
mainsection.setAttribute("class","main-section")

const registerForm=document.createElement("form")
const heading=document.createElement("h1")
heading.innerText="Register Form"

const username=document.createElement("input")
username.setAttribute("type","text")
username.setAttribute("placeholder","Enter your Name")
username.setAttribute("name","username")

const email=document.createElement("input")
email.setAttribute("type","email")
email.setAttribute("placeholder","Enter your Email")
email.setAttribute("name","email")

const password=document.createElement("input")
password.setAttribute("type","password")
password.setAttribute("placeholder","Enter your Password")
password.setAttribute("name","password")


const register_btn=document.createElement("button")
register_btn.innerText="Register"


registerForm.append(heading,username,email,password,register_btn)

mainsection.append(registerForm)
document.body.append(mainsection)


registerForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const formData= new FormData(registerForm)
    const registerData=Object.fromEntries(formData)
    const {username,email,password}=registerData
    if(!username || !email || !password){
        alert("All Fileds are required")
        return
    }

    localStorage.setItem("registerUser",JSON.stringify(registerData))
    Swal.fire({
        title: "Register Successfully. we are navigating to Login Page",
        icon: "success",
        draggable: true
    });
    setTimeout(()=>{
        window.location.href="./login.html"
    },2000)
    registerForm.reset()
   
})