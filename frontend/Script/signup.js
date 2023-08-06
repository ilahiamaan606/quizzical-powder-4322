

let createaccount = document.getElementById("create-account");
let logincontainer = document.getElementById("container");
let signupcontainer = document.getElementById("signupcontainer");


signupcontainer.style.display = "none";

createaccount.addEventListener("click", () => {
    logincontainer.style.display = "none";
    signupcontainer.style.display = "block";
})

let registerform = document.getElementById("signup");

registerform.addEventListener("submit", (e) => {
    e.preventDefault()
    let obj = {
        name: registerform.name.value,
        email: registerform.email.value,
        pass: registerform.pass.value,
        cpassword: registerform.cpass.value
    }
    // console.log(obj)
    if (obj.pass == obj.cpassword && obj.pass.length>6) {

        fetch("https://dull-rose-spider-cuff.cyclic.app/users/signup",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(obj)
            })
            .then(res => res.json())
            .then((res) => {
                alert(res.msg)
                window.location.href = "signup.html";
            })
            .catch((err) => {
                console.log(err)
            })
    }
    else {
        alert(" Password must be at least 6 characters long or the password enterd in confirm password does not match")
    }




})



let loginform = document.getElementById("login");

loginform.addEventListener("submit", (e) => {
    e.preventDefault();
    let obj = {
        email: loginform.email.value,
        pass: loginform.pass.value,
    }

    fetch("https://dull-rose-spider-cuff.cyclic.app/users/login",
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(obj)
        })
        .then(res => res.json())
        .then((res) => {
            alert(res.msg)
            console.log(res.msg)
            if(res.token){
                localStorage.setItem("token",res.token)
                localStorage.setItem("name",res.name)
                window.location.href = "index.html";
            }
        })
        .catch((err) => {
            console.log(err)
        })
})