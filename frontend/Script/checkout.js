let token = localStorage.getItem("token");
let cartData = JSON.parse(localStorage.getItem("cart_data")) || [];
let username= document.getElementById("user-name")

let myname=localStorage.getItem("name");

if(myname){
    username.innerHTML=myname
}


let form = document.getElementById("paymentform")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    let obj = {
        name: form.name.value,
        card: form.cardnumber.value,
        order: cartData,
    }
    ordercreate(obj)
})

async function ordercreate(obj) {

    let res = await fetch("http://localhost:9090/order/create", {
        method: "POST",
        headers: { "Content-Type": "application/json", "token": localStorage.getItem("token") },
        body: JSON.stringify(obj)
    })
    let data=await res.json()
    console.log(data)
    alert(data.msg)
    localStorage.removeItem("cart_data")
    window.location.href = "index.html";
}