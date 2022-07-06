

function login()
{
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if(email=="")
    {
        alert('Email is required');
    }


    if(email=="test@gmail.com" && password == "123")
    {
        alert('login Successfull')
    }
    else{
        alert('Incorrect Username or Password')
    }
    // console.log('Hello test',email,password);
}

