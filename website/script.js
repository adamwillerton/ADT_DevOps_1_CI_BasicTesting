const greetingForm = document.getElementById("greetingForm");
const nameInput = document.getElementById("nameInput");
const message = document.getElementById("message");

greetingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = nameInput.value.trim();

    if (name === "") {
        message.textContent = "Please enter your name.";
        nameInput.focus();
        return;
    }

    message.textContent =
        `Hello ${name}, welcome to the ADT DevOps module!`;
});