

function validate()
{
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;

    if(email=="neel@xyz" && password=="12345")
    {
        alert("Login Successfully!");
        
    }
    else{
        alert("Incorrect Email or Password.");
    }
    
    console.log("Hello",email,password);
}