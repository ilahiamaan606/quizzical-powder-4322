

let addressform=document.getElementById("addressform")



addressform.addEventListener("submit",(e)=>{
  e.preventDefault()
  console.log("address form")

  setTimeout(() => {
    window.location.href = "./payment.html";

  }, 500);
  // window.location.href = "signup.html";

})

let totalmrp=document.getElementById("totalmrp")


let total_price=localStorage.getItem("total_price")

let totalamount=document.getElementById("totalamount")
totalamount.innerHTML=`$ ${total_price}`

totalmrp.innerHTML=`$ ${total_price}`




