document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const accordionBody = button.nextElementSibling;

        button.classList.toggle('active');
        accordionBody.classList.toggle('active');
    });
});
