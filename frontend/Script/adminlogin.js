let form=document.getElementById("adminlogin")

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    if(form.id.value=="admin" && form.password.value=="admin"){
        //redirect to admin page
    }
    else{
        alert("Wrong Credentials")
    }
        
    
})