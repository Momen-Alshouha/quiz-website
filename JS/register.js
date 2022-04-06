let nameElement = document.getElementById("fullname");
let passElement =document.getElementById("password");
let passVerfyElement=document.getElementById("verfypassword");
let registerButton =document.getElementById("registerBtn");
let spanInput = document.getElementById("nameSpan");
let passInput = document.getElementById("passSpan");
let verfySpan = document.getElementById("verfySpan");
let emailElement = document.getElementById("email");
let spanEmail = document.getElementById("spanEmail");


let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let namePattern = /[a-zA-Z]/g;

let passPattern = /^(?=.*?^[A-Z])(?=(.*[a-z]))(?=(.*[\d]){2,})(?!.*\s).{8,}$/ ; // At least 8 digits, must contain two numbers, start with capital letter!.

// A12abc
registerButton.onclick = function() {
        
    if (!(nameElement.value.match(namePattern))) {
        spanInput.innerHTML="Full name must contain letters only!";
        }

        else {
            spanInput.innerHTML=" ";
            localStorage.setItem("name",nameElement.value);
        }

        spanInput.style.color = "red";

        if ((!passElement.value.match(passPattern))) {
            passInput.innerHTML="At least 8 digits, must contain two numbers, start with capital letter!";
        }

        else {
            passInput.innerHTML="";
            localStorage.setItem("password",passElement.value);
        }
    
        passInput.style.color = "red";

        if((!emailElement.value.match(emailPattern))) {
           
            spanEmail.innerHTML="Email must be ex@example.ex";
        }

        else {
            spanEmail.innerHTML=" ";
            localStorage.setItem("email",emailElement.value);
           
        }

        spanEmail.style.color = "red";
        
        if ((nameElement.value.match(namePattern))&&(emailElement.value.match(emailPattern)&&(passElement.value.match(passPattern)))) {
            alert("You have registered successfully");
       
            window.open("../html/login.html","_self")      
          }
}




