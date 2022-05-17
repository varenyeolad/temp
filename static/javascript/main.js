const email = document.getElementById("email");
const password = document.getElementById("psw-repeat");
const password1 = document.getElementById("psw1-repeat");

function validate() {
    if(password.value.length == 0 && email.value.length == 0 && password1.value.length == 0){
        $('#emailMessTemp1').replaceWith('<span id = "emailMessNew1" style="color:red">*Fill the email</span>');
        $('#passMessTemp1').replaceWith('<span id = "passMessNew1" style="color:red">*Fill the password</span>');
        $('#passMessTemp2').replaceWith('<span id = "passMessNew2" style="color:red">*Fill the password please!</span>');
        return false;
    }
    else if(password.value.length == 0 && email.value.length == 0){
        $('#emailMessTemp1').replaceWith('<span id = "emailMessNew1" style="color:red">*Fill the email</span>');
        $('#passMessTemp1').replaceWith('<span id = "passMessNew1" style="color:red">*Fill the password</span>');
        return false;
    }
    else if(email.value.length == 0 && password1.value.length == 0){
        $('#emailMessTemp1').replaceWith('<span id = "emailMessNew1" style="color:red">*Fill the email</span>');
        $('#passMessTemp2').replaceWith('<span id = "passMessNew2" style="color:red">*Fill the password please!</span>');
        return false;
    }
    else if(password.value.length == 0  && password1.value.length == 0){
        $('#passMessTemp1').replaceWith('<span id = "passMessNew1" style="color:red">*Fill the password</span>');
        $('#passMessTemp2').replaceWith('<span id = "passMessNew2" style="color:red">*Fill the password please!</span>');
        return false;
    }
    else if(password.value.length == 0){
        $('#passMessTemp1').replaceWith('<span id = "passMessNew1" style="color:red">*Fill the password</span>');
        return false;
    }
    else if(email.value.length == 0){
        $('#emailMessTemp1').replaceWith('<span id = "emailMessNew1" style="color:red">*Fill the email</span>');
        return false;
    }
    else if(password1.value.length == 0){
        $('#passMessTemp2').replaceWith('<span id = "passMessNew2" style="color:red">*Fill the password please!</span>');
        return false;
    }
    else if(password.value.length > 0 && email.value.length > 0 && password1.value.length > 0 && password.value.match(/[A-Z]/) && password.value.match(/[a-z]/) && password.value.match(/[!\@\#\$\%\^\&]/) && password.value.match(/[0-9]/) && password.value.length >= 8 && password1.value == password.value){
        alert('Successful registration!');
    }

}

function checkEmail(){
    if(email.value.length ==  0){
        $('#emailMessTemp1').replaceWith('<span id = "emailMessNew1" style="color:red">*Fill the email</span>');
        return false;
    }
    else if(email.value.length > 0){
        $('#emailMessNew1').replaceWith('<span id = "emailMessTemp1" style="color:red"></span>');
        return false;
    }
}

function checkPassword(){
    if(password.value.length ==  0){
        $('#passMessTemp1').replaceWith('<span id = "passMessNew1" style="color:red">*Fill the password</span>');
        return false;
    }
    else if(password.value.length > 0){
        $('#passMessNew1').replaceWith('<span id = "passMessTemp1" style="color:red"></span>');
        return false;
    }
}

function checkPasswordRepeat(){
    if(password1.value.length ==  0){
        $('#passMessTemp2').replaceWith('<span id = "passMessNew2" style="color:red">*Fill the password please</span>');
        return false;
    }
    else if(password1.value.length > 0){
        $('#passMessNew2').replaceWith('<span id = "passMessTemp2" style="color:red"></span>');
        return false;
    }
}

function validatePassword(){
    if(password.value.match(/[A-Z]/)){
        $('#capital').css({'text-decoration':'line-through'});
    }
    else{
        $('#capital').css({'text-decoration':'none'});
    }

    if(password.value.match(/[a-z]/)){
        $('#smallLetter').css({'text-decoration':'line-through'});
    }
    else{
        $('#smallLetter').css({'text-decoration':'none'});
    }

    if(password.value.match(/[!\@\#\$\%\^\&]/)){
        $('#symbol').css({'text-decoration':'line-through'});
    }
    else{
        $('#symbol').css({'text-decoration':'none'});
    }

    if(password.value.match(/[0-9]/)){
        $('#number').css({'text-decoration':'line-through'});
    }
    else{
        $('#number').css({'text-decoration':'none'});
    }

    if(password.value.length>=8){
        $('#length').css({'text-decoration':'line-through'});
    }
    else{
        $('#length').css({'text-decoration':'none'});
    }
}

function validatePasswordRepeat(){
    if(password.value == password1.value){
        $('#repeat').css({'text-decoration':'line-through'});
    }
    else{
        $('#repeat').css({'text-decoration':'none'});
    }
}