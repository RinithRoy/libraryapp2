function firstname()
{
    let firstname = document.getElementById("firstname");
    let error1 = document.getElementById("error1");
    let regexp1 = /^([a-zA-Z]+)$/;
    if(regexp1.test(firstname.value))
    {
        error1.innerHTML = "Valid";
        error1.style.color = "green";
        return true;
    }
    else{
        error1.innerHTML = "Invalid-Enter only Alphabets";
        error1.style.color = "red";
        return false;
    }
}

function middlename()
{
    let middlename = document.getElementById("middlename");
    let error2 = document.getElementById("error2");
    let regexp2 = /^([a-zA-Z]+)?$/;
    if(regexp2.test(middlename.value))
    {
        error2.innerHTML = "Optional";
        error2.style.color = "orange";
        return true;
    }
    else{
        error2.innerHTML = "Invalid-Leave it or enter only Alphabets"
        error2.style.color = "red";
        return false;
    }
}

function lastname()
{
    let lastname = document.getElementById("lastname");
    let error3 = document.getElementById("error3");
    let regexp3 = /^([a-zA-Z]+)$/;
    if(regexp3.test(lastname.value))
    {
        error3.innerHTML = "Valid";
        error3.style.color = "green";
        return true;
    }
    else{
        error3.innerHTML = "Invalid-Enter only Alphabets";
        error3.style.color = "red";
        return false;
    }
}

function phonenumber()
{
    let phonenumber = document.getElementById("phonenumber");
    let error4 = document.getElementById("error4");
    let regexp4 = /^\+?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (regexp4.test(phonenumber.value))
    {
        error4.innerHTML = "Valid";
        error4.style.color = "green";
        return true;
    }
    else{
        error4.innerHTML = "Invalid-Enter only numbers (10 DIGITS)";
        error4.style.color = "red";
        return false;
    }
}

function email()
{
    let email = document.getElementById("email");
    let error5 = document.getElementById("error5");
    let regexp5 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(regexp5.test(email.value))
    {
        error5.innerHTML = "Valid";
        error5.style.color = "green";
        return true;
    }
    else{
        error5.innerHTML = "Invalid";
        error5.style.color = "red";
        return false;
    }
}
// var pwd = document.getElementById("pwd");
// let error6 = document.getElementById("error6");
// var strengthbar = document.getElementById("strength");
// pwd.addEventListener("keyup",password);
// function password()
// {
//     if(pwd.value=="")
//     {
//         error6.innerHTML = "Invalid";
//         error6.style.color = "red";
//         return false;
//     }
//     else
//     {
//     var regexp1 = /[a-zA-Z]+/;
//     var regexp2 = /[0-9]+/;
//     var strength = 0;
//     if(pwd.value.match(regexp1))
//     {
//         strength += 1;
//     }
//     if(pwd.value.match(regexp2))
//     {
//         strength += 1;
//     }
//     if(pwd.value.length>8)
//     {
//         strength += 1;
//     }
//     switch(strength)
//     {
//         case 0:
//         strengthbar.value = 0;
//         break;

//         case 1:
//         strengthbar.value = 20;
//         strengthbar.innerHTML = "Poor";
//         strengthbar.style.backgroundColor = "red";
//         break;

//         case 2:
//         strengthbar.value = 40;
//         strengthbar.innerHTML = "Medium";
//         strengthbar.style.backgroundColor = "orange";
//         break;

//         case 3:
//         strengthbar.value = 60;
//         strengthbar.innerHTML = "Strong";
//         strengthbar.style.backgroundColor = "green";
//         break;
//     }
//     }
// }  
function password()
{
    let password = document.getElementById("password");
    let error6 = document.getElementById("error6");
    let regexp6 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/;
    if (regexp6.test(password.value))
    {
        error6.innerHTML = "Valid";
        error6.style.color = "green";
        return true;
    }
    else{
        error6.innerHTML = "Invalid-Enter Min 8 characters with atleast 1 UpperCase, 1 LowerCase, 1 number";
        error6.style.color = "red";
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

function confirmpassword()
{
    let password = document.getElementById("password").value;
    let confirmpassword = document.getElementById("confirmpassword").value;
    let error7 = document.getElementById("error7");
    if (password != confirmpassword || confirmpassword=="")
    { 
        error7.innerHTML = "Invalid-Please enter the same Password";
        error7.style.color = "red";
        return false;
    }
    else
    {
        return true;
    }
}
function validate()
{
    var a = firstname();
    var b = middlename();
    var c = lastname();
    var d = phonenumber();
    var e = email();
    var f = password();
    var g = confirmpassword();
    return a && b && c && d && e && f && g;
}















 


