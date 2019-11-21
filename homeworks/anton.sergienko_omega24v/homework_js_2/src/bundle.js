import './style.sass';
import { isValid } from './form-validate';

// ALL FORM QUERY SELECTOR
const form = document.querySelector('.form');
const inputFirstName = document.querySelector('#first-name');
const inputLastName = document.querySelector('#last-name');
const inputEmail = document.querySelector('#email');
const inputPhone = document.querySelector('#phone');
const inputAge = document.querySelector('#age');

// INPUTS FUNCTION VALIDATION
const nameValidation = (text, min, max) => isValid.minLength(text, min) && isValid.maxLength(text, max);
const emailValidation = (text, min) => isValid.email(text) && isValid.minLength(text, min);
const phoneValidation = (text, min) => isValid.phone(text) && isValid.minLength(text, min);
const ageValidation = (text, min, max) => (isValid.numberRange(text, min, max));

// ERROR FIELDS
const formLabel = document.querySelectorAll('.form__label');
const status = document.querySelector('.status');

const errorField = (isFieldValid, fieldName) => {
    if (!isFieldValid) {
        fieldName.closest('label').classList.add('error');
    }
};

// SEND & CHECK FORM
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const firstNameValue = nameValidation(inputFirstName.value, 1, 25);
    const lastNameValue = nameValidation(inputLastName.value, 1, 25);
    const emailValue = emailValidation(inputEmail.value, 1);
    const phoneValue = phoneValidation(inputPhone.value, 1);
    const ageValue = ageValidation(inputAge.value, 16, 80);

    status.setAttribute('hidden', true);
    [].forEach.call(formLabel, (labelItem) => {
        labelItem.classList.remove('error');
    });

    if (firstNameValue && lastNameValue && emailValue && phoneValue && ageValue) {
        status.removeAttribute('hidden');
    } else {
        errorField(firstNameValue, inputFirstName);
        errorField(lastNameValue, inputLastName);
        errorField(emailValue, inputEmail);
        errorField(phoneValue, inputPhone);
        errorField(ageValue, inputAge);
    }
});
