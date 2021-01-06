function email()
{
    let email = document.getElementById("email");
    let error1 = document.getElementById("error1");
    let regexp1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(regexp1.test(email.value))
    {
        error1.innerHTML = "Valid";
        error1.style.color = "green";
        return true;
    }
    else{
        error1.innerHTML = "Invalid";
        error1.style.color = "red";
        return false;
    }
}

function password()
{
    let password = document.getElementById("password");
    let error2 = document.getElementById("error2");
    let regexp2 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/;
    if (regexp2.test(password.value))
    {
        error2.innerHTML = "Valid";
        error2.style.color = "green";
        return true;
    }
    else{
        error2.innerHTML = "Invalid-Enter Min 8 characters with atleast 1 UpperCase, 1 LowerCase, 1 number";
        error2.style.color = "red";
        return false;
    }
}
function myfunction()
{
    var x = document.getElementById("password");
    if(x.type === "password")
    {
        x.type = "text";

    }
    else
    {
        x.type = "password";
    }
}
function validate()
{
    var a = email();
    var b = password();
    return a && b;
}