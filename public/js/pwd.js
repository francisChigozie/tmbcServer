      const form = document.getElementById('pwd-form');
      const email = document.getElementById('pwd-email');
      

      form.addEventListener('submit',(e) => {
      e.preventDefault();

    pwdInputs();
});

function pwdInputs() {
    // get the values from the inputs
    const emailValue = email.value.trim();

    
    if(emailValue === '') {
        setErrorFor(email, 'Please enter your email')
    }else if(!isEmail(emailValue)) {
        setErrorFor(email, 'Enter a valid email')
    }else{
        setSuccessFor(email);
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