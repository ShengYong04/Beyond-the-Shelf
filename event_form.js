const form = document.getElementById('form');
const email = document.getElementById('email');
const Fname = document.getElementById('Fname');
const submitButton = document.getElementById('submit');
const resetButton = document.getElementById('reset');
const radioOptions = document.querySelectorAll('input[type="radio"]');
const errorElements = document.querySelectorAll('.error');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    validateForm();
});

// Add an event listener to the radio buttons to listen for changes
radioOptions.forEach(function (radio) {
    radio.addEventListener('change', function () {
        validateRadioButtons();
    });
});

function validateForm() {
    const emailValue = email.value.trim();
    const FnameValue = Fname.value.trim();
    let radioChecked = false;

    // Check if at least one radio button is checked
    radioOptions.forEach(function (radio) {
        if (radio.checked) {
            radioChecked = true;
        }
    });

    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Invalid email format');
    } else {
        setSuccess(email);
    }

    if (FnameValue === '') {
        setError(Fname, 'Full Name is required');
    } else {
        setSuccess(Fname);
    }

    // Check if at least one radio button is checked
    if (!radioChecked) {
        errorElements.forEach(function (errorElement) {
            if (errorElement.classList.contains('error') && errorElement.id === 'event-error') {
                errorElement.style.display = 'block'; // Display the radio error message
                errorElement.innerText = 'Please choose an option.';
            }
        });
    } else {
        errorElements.forEach(function (errorElement) {
            if (errorElement.classList.contains('error') && errorElement.id === 'event-error') {
                errorElement.style.display = 'none'; // Hide the radio error message
                errorElement.innerText = ''; // Clear the radio error message
            }
        });
    }

    if (emailValue !== '' && isValidEmail(emailValue) && FnameValue !== '' && radioChecked) {
        // All fields are valid, so show the success message
        alert('The registration is success');

        // Redirect to the event page after 2 seconds (2000 milliseconds)
        setTimeout(function () {
            window.location.href = 'event.html'; // Replace 'event-page.html' with the actual URL of your event page
        }, 2000);
    }
}

function setError(input, message) {
    const inputControl = input.parentElement;
    const errorDiv = inputControl.querySelector('.error');

    errorDiv.innerText = message;
    inputControl.classList.remove('success');
    inputControl.classList.add('error');
}

function setSuccess(input) {
    const inputControl = input.parentElement;
    inputControl.querySelector('.error').innerText = '';
    inputControl.classList.remove('error');
    inputControl.classList.add('success');
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateRadioButtons() {
    let radioChecked = false;
    radioOptions.forEach(function (radio) {
        if (radio.checked) {
            radioChecked = true;
        }
    });

    if (!radioChecked) {
        errorElements.forEach(function (errorElement) {
            if (errorElement.classList.contains('error') && errorElement.id === 'event-error') {
                errorElement.style.display = 'block'; // Display the radio error message
                errorElement.innerText = 'Please choose an option.';
            }
        });
    } else {
        errorElements.forEach(function (errorElement) {
            if (errorElement.classList.contains('error') && errorElement.id === 'event-error') {
                errorElement.style.display = 'none'; // Hide the radio error message
                errorElement.innerText = ''; // Clear the radio error message
            }
        });
    }
}
