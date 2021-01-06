function name()
{
    let name = document.getElementById("name");
    let error1 = document.getElementById("error1");
    let regexp1 = /^([a-zA-Z\.'- ]+)$/;
    if(regexp1.test(name.value))
    {
        error1.innerHTML = "Valid";
        error1.style.color = "green";
        return true;
    }
    else{
        error1.innerHTML = "Invalid-Enter a Valid Author Name";
        error1.style.color = "red";
        return false;
    }
}
function book()
{
    let book = document.getElementById("book");
    let error2 = document.getElementById("error2");
    let regexp2 = /^([a-zA-Z0-9\.!-?'& ]+)$/;
    if(regexp2.test(book.value))
    {
        error2.innerHTML = "Valid";
        error2.style.color = "green";
        return true;
    }
    else{
        error2.innerHTML = "Invalid-Enter a Valid Book Name";
        error2.style.color = "red";
        return false;
    }
}

function genre()
{
    let genre = document.getElementById("genre");
    let error3 = document.getElementById("error3");
    let regexp3 = /^([a-zA-Z ]+)$/;
    if(regexp3.test(genre.value))
    {
        error3.innerHTML = "Valid";
        error3.style.color = "green";
        return true;
    }
    else{
        error3.innerHTML = "Invalid-Enter a Valid Genre";
        error3.style.color = "red";
        return false;
    }
}

function show()
    
    {   
        // event.preventDefault();
        let a = document.getElementById("input");
        let d = document.getElementById("input").value;
        let error4 = document.getElementById("error4"); 

    if(d == "")
    {
        error4.innerHTML = "Please Post the Author's Image";
        error4.style.color = "red";
        return false;
    }
    else
    {
        let b = a.files; 
        let fileread = new FileReader; 
        fileread.onload=function(event) 

        {
            let c = fileread.result; 
            $("#image").attr("src",`${c}`);
            return true;
        }
        
        fileread.readAsDataURL(b[0]);
    }
						   
    }

function validate()
{
    var one = name();
    var two = book();
    var three = genre();
    var four = show();

    return one && two && three && four;
}
