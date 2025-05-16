// Validation
function validation() {
    event.preventDefault();
    
    var email = 'ali@gmail.com';
    var pass = '12345678';

    var email1 = document.getElementById('email').value;
    var pass1 =  document.getElementById('pass').value; // Corrected variable name to pass1
    
    if (email === email1 && pass === pass1) { // Use === for comparison
        alert('Login successfully');
        setTimeout(() => {
            window.location.href = '../homepage.html';
        }, 1000);
    }
    else {
        alert('Email or Password are incorrect! Please try again.');
    }
}

// Show Password
function myFunction() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
