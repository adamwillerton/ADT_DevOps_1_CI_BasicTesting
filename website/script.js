function createGreeting(name) {
    if (!name.trim()) {
        return "Please enter your name.";
    }

    return `Hello ${name}, welcome to the ADT DevOps module!`;
}

const greetingForm = document.getElementById("greetingForm");
const nameInput = document.getElementById("nameInput");
const message = document.getElementById("message");

greetingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    message.textContent = createGreeting(nameInput.value);

    if (!nameInput.value.trim()) {
        nameInput.focus();
    }
});

module.exports = { createGreeting };
