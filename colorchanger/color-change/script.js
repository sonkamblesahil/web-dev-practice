document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            document.body.style.backgroundColor = button.style.backgroundColor;
        });
    });
});