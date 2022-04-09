

let buttonElement = document.getElementById("registerBtn");
let spanElement = document.getElementById("spanPass");
var userName = document.getElementById('email');
var userPw = document.getElementById('password');
var storedEmail = localStorage.getItem('email');
var storedPw = localStorage.getItem('password');

buttonElement.onclick = function (event) {
  event.preventDefault();
  if(userName.value !== storedEmail && userPw.value !== storedPw) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Incorrect email and password!',
    })
  }      
        else if(userName.value !== storedEmail) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Incorrect username!',
          })
        }

       else if(userPw.value !== storedPw) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Incorrect password!',
          })
        }
       
          else{  window.open("../html/welcome.html","_self");
        }  
        
    }

