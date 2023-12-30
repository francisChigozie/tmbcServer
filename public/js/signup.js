
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');

function checkInputs() {
    // get the values from the inputs
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(firstNameValue === '') {
        // show error
        // add error class
        setErrorFor(firstName, 'Please enter your first name');
    }else{
        // add success class
        setSuccessFor(firstName)
    }

    if(lastNameValue === '') {
        // show error
        // add error class
        setErrorFor(lastName, 'Please enter your last name');
    }else{
        // add success class
        setSuccessFor(lastName)
    }

    if(emailValue === '') {
        setErrorFor(email, 'Please enter your email')
   
    }else{
        setSuccessFor(email);
    }

    if(passwordValue === '') {
        setErrorFor(password, 'Please enter your password');
    }else{
        // add success class
        setSuccessFor(password)
    }

    if(password2Value === '') {
        setErrorFor(password2, 'Confirm your password');
    }else if(passwordValue !== password2Value) {
        setErrorFor(password2, 'Password does not match');
    }else{
        // add success class
        setSuccessFor(password2)
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

 //Make HTTP POST request
 const adminContributor = async ( 
    firstNameValue,lastNameValue,emailValue,passwordValue,password2Value
 ) => {
 try {
   const response = await axios({
     method: 'POST',
     url: '/api/auth/register',
     data: {
        firstNameValue,lastNameValue,emailValue,passwordValue,password2Value
     }
   })
   console.log(response)
   
 } catch (error) {
   console.log(error)
 }

}

 document.getElementById('form').addEventListener('submit', e => {
 e.preventDefault();

     const firstNameValue = firstName.value.trim();
     const lastNameValue = lastName.value.trim();
     const emailValue = email.value.trim();
     const passwordValue = password.value.trim();
     const password2Value = password2.value.trim();

     /* const data = {
        firstNameValue,lastNameValue,emailValue,passwordValue,password2Value
     }
 */
     //console.log(data)

     checkInputs();
    adminContributor(
        firstNameValue,lastNameValue,emailValue,passwordValue,password2Value
    );

})