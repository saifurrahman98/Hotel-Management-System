document.addEventListener("DOMContentLoaded", function() {
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const email = document.getElementById('email');
const mobile = document.getElementById('mobile');
const passwordError = document.getElementById('passwordError');
const emailError = document.getElementById('emailError');
const mobileError = document.getElementById('mobileError');
const showPassword = document.getElementById('showPassword');

function correctPassword(){
    if(password.value !== confirmPassword.value){
        passwordError.textContent = "Passwords don't match";
        confirmPassword.setCustomValidity('Passwords must match');
    }
    else{
    passwordError.textContent = '';
    confirmPassword.setCustomValidity('');
            }
        }

function validateEmail(){
   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if(!emailPattern.test(email.value)){
           emailError.textContent = 'Invalid email address';
                    email.setCustomValidity('Invalid email address');
       }
       else{
           emailError.textContent = '';
                    email.setCustomValidity('');
                }
            }

function validateMobile(){
                const mobilePattern = /^[0-9]{10}$/;
                if(!mobilePattern.test(mobile.value)){
                    mobileError.textContent = 'Mobile number must be 10 digits';
                    mobile.setCustomValidity('Mobile number must be 10 digits');
                }
                else{
                    mobileError.textContent = '';
                    mobile.setCustomValidity('');
                }
            }

            function visibilityPassword(){
                const passwordType = showPassword.checked ? 'text' : 'password';
                password.type = passwordType;
                confirmPassword.type = passwordType;
            }

            password.addEventListener('change', correctPassword);
            confirmPassword.addEventListener('change', correctPassword);
            email.addEventListener('change', validateEmail);
            mobile.addEventListener('change', validateMobile);
            showPassword.addEventListener('change', visibilityPassword);
        });
