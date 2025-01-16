const buttons = document.querySelectorAll('.btn'); // Select all buttons
const body = document.body; // Select the body element


buttons.forEach((button) => {
    button.addEventListener('click', function () {
        const color = button.style.backgroundColor; // Get the button's background color
        body.style.backgroundColor = color;
    });
});
