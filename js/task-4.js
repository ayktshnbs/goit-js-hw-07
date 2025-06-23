const register = document.querySelector(".login-form");

register.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
  

    if (email === "" || password === "") {
        alert("All fields must be filled out");
        return;
    }

    const formData = {
        email: email,
        password: password
    };

    console.log(formData);
    register.reset();
});