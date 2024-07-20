document.querySelector('.signup-btn').onclick = function(){

    var password = document.querySelector('.password').value,
    confirmPassword = document.querySelector('.confirmPassword').value;

    if(password == ""){
        alert("Field cannot be empty.");
    }
    else if(password != confirmPassword){
        alert("Password didn't match.Try again.");
        return false
    }
    else if(password == confirmPassword){
        alert("Password Match.")
    }
    return true
}

