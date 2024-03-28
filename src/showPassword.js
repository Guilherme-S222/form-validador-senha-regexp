const showPassword = () => {
    const btnShowPassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    const passwordImg = document.getElementById('passwordImg');
    const closedEye = '../img/closed.png';
    const openEye = '../img/open.png';

    let senhaVisivel = false;

    btnShowPassword.addEventListener('click', () => {
        senhaVisivel = !senhaVisivel;

        if (senhaVisivel) {
            passwordInput.type = 'text';
            passwordImg.src = closedEye;
        } else {
            passwordInput.type = 'password';
            passwordImg.src = openEye;
        }
    });
};

export default showPassword;