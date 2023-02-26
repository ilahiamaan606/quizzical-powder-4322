let token = localStorage.getItem("token");
let cartData = JSON.parse(localStorage.getItem("cart_data")) || [];
let username= document.getElementById("user-name")

let myname=localStorage.getItem("name");

if(myname){
    username.innerHTML=myname
}

let baseURL = "https://dark-cyan-fish-yoke.cyclic.app"

let cardNumber = "123456789"
let date = "2024-01-01"
let cvv = "123"

// document.querySelector("form").addEventListener("submit",function(event){
//     event.preventDefault()
//     let cardNumber2=document.querySelector("#card-number").value;
//     let name=document.querySelector("#name").value;
//     let date2=document.querySelector("#date").value;
//     let cvv2=document.querySelector("#cvv").value;
//     if(cardNumber2 && name && date2 && cvv2){
//         if(cardNumber2===cardNumber && cvv2===cvv){
//             alert("Payment Sucessful")
//             addDatatoOrderDb()
//             // window.location.href="./index.html"
//         }else{
//             alert("Wrong Credentials")
//         }
//     }else{
//         alert("Enter all Fields")
//     }

//     console.log(cardNumber2,name,date,cvv2)
// })


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



async function addDatatoOrderDb() {
    try {
        let res = await fetch(`${baseURL}/products/allcart`, {
            method: "GET",
            headers: {
                Authorization: token
            }
        })
        let data = await res.json()
        order(data)

    } catch (error) {
        console.log(error)
    }
}

async function order(data) {
    let arr = [];
    for (let elem of data) {
        let obj = {
            image: elem.image1,
            name: elem.name,
            price: elem.price,
            quantity: elem.quantity,
            color: elem.color,
            size: elem.size,
            status: "Pending",
        }
        arr.push(obj)
    }

    try {
        let res = await fetch(`${baseURL}/order/add`, {
            method: "POST",
            body: JSON.stringify(arr),
            headers: {
                "Content-Type": "Application/json",
                Authorization: token
            }
        })

        let res2 = await res.json()
        console.log(res2)
        deletefromcart()

    } catch (error) {
        console.log(error)
    }
}

async function deletefromcart() {
    try {
        let res = await fetch(`${baseURL}/products/cart/userid/delete`, {
            method: "DELETE",
            headers: {
                Authorization: token
            }
        })
        let data = await res.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}