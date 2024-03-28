const validate = () => {

    function validateName(name) {
        if (name === "") {
            const err = new Error('Nome inválido')
            err.input = 'name'
            throw err
        }
    };

    function validateEmail(email) {
        if (!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)) {
            const err = new Error('Email inválido.')
            err.input = 'email'
            throw err
        }
    };

    function validatePassword(password) {
        if (
            password.length < 12 ||
            !password.match(/[a-z]/) ||
            !password.match(/[A-Z]/) ||
            !password.match(/\d/) ||
            !password.match(/[^a-zA-Z0-9\s]/)
        ) {
            let errMsg = 'A senha deve conter:'
            if (password.length < 12) errMsg += ' no mínimo 12 caracteres;'
            if (!password.match(/[a-z]/)) errMsg += ' uma letra minúscula;'
            if (!password.match(/[A-Z]/)) errMsg += ' uma letra maiúscula;'
            if (!password.match(/\d/)) errMsg += ' um número;'
            if (!password.match(/[^a-zA-Z0-9\s]/)) errMsg += ' um caractere especial.'

            const err = new Error(errMsg)
            err.input = 'password'
            throw err
        }
    };

    function resetFormStyles(inputs) {
        Object.entries(inputs).forEach(([key, value]) => {
            value.classList.remove('success', 'error')
            document.querySelector(`#${key}-error`).textContent = ""
        })
    };

    const userInputs = {
        name: document.querySelector('#name'),
        email: document.querySelector('#email'),
        password: document.querySelector('#password')
    };

    const showSuccessMessage = () => {
        const successMessage = document.getElementById('successMessage');
        successMessage.style.display = 'block';

        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
    };

    const form = document.querySelector('form');

    form.addEventListener('submit', (ev) => {
        ev.preventDefault()
        resetFormStyles(userInputs)

        try {

            validateName(userInputs.name.value)
            userInputs.name.classList.add('success')

            validateEmail(userInputs.email.value)
            userInputs.email.classList.add('success')

            validatePassword(userInputs.password.value)
            userInputs.password.classList.add('success')

            showSuccessMessage()

        } catch (err) {

            userInputs[err.input].classList.add('error')
            document.querySelector(`#${err.input}-error`).textContent = err.message

        }
    });
};

export default validate;