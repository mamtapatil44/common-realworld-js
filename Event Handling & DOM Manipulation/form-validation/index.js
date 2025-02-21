document.getElementById("registrationForm").addEventListener('submit',function(event){
event.preventDefault();
let isValid = true;

let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let password = document.getElementById("password").value.trim();


let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError")
let passwordError = document.getElementById("passwordError")
let sucessMsg = document.getElementById("sucessMsg");

if(name === ''){
    nameError.textContent = "Name can not be empty.";
    isValid = false
}
else{
    isValid = true;
    nameError.textContent = "";
}
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(!emailPattern.test(email)){
    emailError.textContent = "Please enter valid email."
    isValid = false

} else{
    isValid = true;
     emailError.textContent = ""
}

if(password.length < 6){
    passwordError.textContent = "Password should be atleast 6 char."
    isValid = false
}else{
    isValid = true;
     passwordError.textContent = ""
}
if(isValid){
    sucessMsg.textContent ="Registration Successful...."
}

})