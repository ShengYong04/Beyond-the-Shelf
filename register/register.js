const form = document.getElementById('form');
const email = document.getElementById('email');
const pass = document.getElementById('pass');
const pass2 = document.getElementById('pass2');

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});
 
const setError = (element, message) => {
    const inputbox = element.parentElement;
    const errorDisplay = inputbox.querySelector('.error');

    errorDisplay.innerText = message;
    inputbox.classList.add('error');
    inputbox.classList.remove('success')
}

const setSuccess = element => {
    const inputbox = element.parentElement;
    const errorDisplay = inputbox.querySelector('.error');

    errorDisplay.innerText = '';
    inputbox.classList.add('success');
    inputbox.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const emailValue = email.value.trim();
    const passValue = pass.value.trim();
    const pass2Value = pass2.value.trim();

    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if (passValue === '') {
        setError(pass, 'Password is required');
    } else if (passValue.length < 8) {
        setError(pass, 'Password must be at least 8 characters.')
    } else {
        setSuccess(pass);
    }

    if (pass2Value === '') {
        setError(pass2, 'Please confirm your password');
    } 
    else if (pass2Value !== passValue) {
        setError(pass2, "Passwords don't match");
    } 
    else {
        setSuccess(pass2);
        
        // All fields are valid, so show the success message
        alert('The registration is success');

        // Wait for 3 seconds (3000 milliseconds) and then redirect to index.html
        setTimeout(() => {
            window.location.href = '/login/index.html';
        }, 2000);
    }
};

