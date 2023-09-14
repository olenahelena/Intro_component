const myButton = document.getElementById('submit__btn');

const errorText = document.getElementById('error-Text');
const errorSecondText = document.getElementById('second__error-Text');
const errorThirdText = document.getElementById('third__error-text');
const errorFourthText = document.getElementById('fourth__error-text');

const errorIconName = document.getElementById('error-icon');
const errorIconSurname = document.getElementById('error-icon__surname');
const errorIconEmail = document.getElementById('error-icon__email');
const errorIconPassword = document.getElementById('error-icon__password');

const successText = document.getElementById('success-text');
const surnameSuccessText = document.getElementById('surname_success-text');
const emailSuccessText = document.getElementById('email_success-text');
const passwordSuccessText = document.getElementById('password_success-text');

const firstNameInput = document.getElementById('fname');
const lastNameInput = document.getElementById('lname');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');


myButton.onclick = function () {
    const fnameValue = firstNameInput.value.trim();
    const lnameValue = lastNameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();


    if (fnameValue === '') {
        errorText.classList.remove('error');
        errorIconName.classList.remove('error');
        firstNameInput.classList.add('invalid_border');
    } else {
         firstNameInput.classList.add('valid_border');
         successText.classList.remove('error');
    }

    if (lnameValue === '') {
        errorSecondText.classList.remove('error');
        errorIconSurname.classList.remove('error');
        lastNameInput.classList.add('invalid_border');
    } else {
         lastNameInput.classList.add('valid_border');
         surnameSuccessText.classList.remove('error');
    }

      if (emailValue === '' || !isValidEmail(emailValue)) {
        errorThirdText.classList.remove('error');
        errorIconEmail.classList.remove('error');
        emailInput.classList.add('invalid_border');
    } else {
         emailInput.classList.add('valid_border');
         emailSuccessText.classList.remove('error');
    }

        if (passwordValue === '' || !isPasswordValid(passwordValue)) {
        errorIconPassword.classList.remove('error');
        errorFourthText.classList.remove('error');
        passwordInput.classList.add('invalid_border');
    } else {
         passwordInput.classList.add('valid_border');
         passwordSuccessText.classList.remove('error');
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isPasswordValid(password) {
  // Define password validation rules
  const minLength = 8;           // Minimum password length
  const hasUppercase = /[A-Z]/;  // At least one uppercase letter
  const hasLowercase = /[a-z]/;  // At least one lowercase letter
  const hasNumber = /\d/;        // At least one digit
  const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/; // At least one special character

  // Check if the password meets all the criteria
  return (
    password.length >= minLength &&
    hasUppercase.test(password) &&
    hasLowercase.test(password) &&
    hasNumber.test(password) &&
    hasSpecialChar.test(password)
  );
}