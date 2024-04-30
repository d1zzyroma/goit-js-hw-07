const form = document.querySelector(".login-form");

form.addEventListener("submit", function(event){
    event.preventDefault();

    const emailInput = this.elements.email;
    const passwordInput = this.elements.password;

    if (!emailInput.value || !passwordInput.value) {
        alert('All form fields must be filled in');
        return; 
    }

    const data = {
        email: emailInput.value,
        password: passwordInput.value
    }

    console.log(data);

    form.reset();
});
