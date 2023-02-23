let createaccount=document.getElementById("create-account");
let logincontainer=document.getElementById("container");
let signupcontainer=document.getElementById("signupcontainer");

signupcontainer.style.display="none";

createaccount.addEventListener("click",()=>{
    logincontainer.style.display="none";
    signupcontainer.style.display="block";
    console.log("hello")
})