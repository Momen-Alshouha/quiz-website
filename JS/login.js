let buttonElement = document.getElementById("registerBtn");

let spanElement = document.getElementById("spanPass");


buttonElement.onclick = function () {

        var storedEmail = localStorage.getItem('email');
        var storedPw = localStorage.getItem('password');
    
        var userName = document.getElementById('email');
        var userPw = document.getElementById('password');
    

       

        if(userName.value !== storedEmail || userPw.value !== storedPw) {
            alert('Email or password incorrect');
        }
       
          else{  window.open("../html/welcome.html");
        }  
        
    }

