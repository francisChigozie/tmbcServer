     const form = document.getElementById('login-form');
      const email = document.getElementById('login-email');
      const password = document.getElementById('login-password');

      form.addEventListener('submit',(e) => {
      e.preventDefault();

    controlInputs();
});

function controlInputs() {
    // get the values from the inputs
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    
    if(emailValue === '') {
        setErrorFor(email, 'Please enter your email')
    }else if(!isEmail(emailValue)) {
        setErrorFor(email, 'Enter a valid email')
    }else{
        setSuccessFor(email);
    }

    if(passwordValue === '') {
        setErrorFor(password, 'Please enter your password');
    }else{
        // add success class
        setSuccessFor(password)
    }

    // show suceess message
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; //form-control
    const small = formControl.querySelector('small');

    // add error message inside small
    small.innerText = message;

    // add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

function isEmail(email){
    return (regexp = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$")
}