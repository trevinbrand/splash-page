function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {  //to set messages in the input fields themselves
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) { //to clear the input error
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = ""; 
}

document.addEventListener("DOMContentLoaded", () => { //once the document is ready run this function
    const loginForm = document.querySelector("#login"); 
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => { //when you click on the create account link
        e.preventDefault(); //will not redirect via the href
        loginForm.classList.add("form--hidden"); //hide login form
        createAccountForm.classList.remove("form--hidden");//shows the create account form
    });

    document.querySelector("#linkLogin").addEventListener("click", e => { //when you click login link
        e.preventDefault(); //to prevent default behavior, will not redirect via the href
        loginForm.classList.remove("form--hidden"); 
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e => { //to set error if login incorrect
        e.preventDefault();

        // Perform your AJAX/Fetch login

        setFormMessage(loginForm, "error", "User Name or Password were not found."); 
    });

    document.querySelectorAll(".form__input").forEach(inputElement => { //display error messages for each of the input fields
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 6) {
                setInputError(inputElement, "Username must be at least six characters long");
            }
        });

        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupPassword" && e.target.value.length > 0 && e.target.value.length < 8) {
                setInputError(inputElement, "Password must be at least eight characters long");
            }
        });

        inputElement.addEventListener("blur", e => {
            if (e.target.id === "confirmPassword" && confirmPassword.value != signupPassword.value ) {
                setInputError(inputElement, "Passwords must match");
            }
        });

        inputElement.addEventListener("blur", e => {
            if (e.target.id === "confirmPassword" && confirmPassword.value != signupPassword.value ) {
                setInputError(inputElement, "Passwords must match");
            }
        });
        
        inputElement.addEventListener("blur", e => {

            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //should this constant be declared here

            if (e.target.id === "email" && !email.value.match(emailPattern)) { //to check if the email input does not math the required pattern
                setInputError(inputElement, "Please enter a valid email");
            }
        });

        inputElement.addEventListener("input", e => { //clear any errors when a user types inside the input field
            clearInputError(inputElement);
        });
    });
});