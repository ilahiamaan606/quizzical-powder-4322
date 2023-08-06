let username1 = document.getElementById("user-name")

let username = document.getElementById("username")

let myname1 = localStorage.getItem("name");

if (myname1) {
  username.innerHTML = myname1
}

if (myname1) {
  username1.innerHTML = myname1
}

const token = localStorage.getItem('token');


if (token) {
  username1.innerText = 'Logout';
  username1.setAttribute("href", "index.html");
} else {
  username1.innerText = 'Sign In';
  username1.setAttribute("href", "signup.html");
}


if (username1.innerText == "Logout") {

  

  username1.addEventListener("click", async (e) => {

    e.preventDefault()

    // const response = await fetch('https://dull-rose-spider-cuff.cyclic.app/users/logout', {
    //   method: 'GET',
    //   headers: {
    //     'authorization': `Bearer ${localStorage.getItem('token')}`
    //   }
    // });
    // const data = await response.json();
    // console.log(data)
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    alert("You are Logged Out Sucessfully")
    location.reload() 


    // console.log(err);
    // alert('Something went wrong!');

  })

}


if (username1.innerText == "Sign In") {

  username1.setAttribute("href", "signup.html");

}

// username1.addEventListener('click', async () => {

// });

//Burger menu

document.addEventListener("DOMContentLoaded", function() {
  var hamBurger = document.getElementById("ham-burger");
  var menuBar = document.querySelector(".menu-bar");
  hamBurger.addEventListener("click", function() {
    if (menuBar.style.display === "block") {
      menuBar.style.display = "none";
    } else {
      menuBar.style.display = "block";
    }
  });
});




