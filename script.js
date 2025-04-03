function showRegisterForm() {
    document.getElementById('mainContent').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
}

function showMainContent() {
    document.getElementById('mainContent').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
}

const celebrationDate = new Date("April 6, 2025 00:00:00").getTime();

const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = celebrationDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = 
        `📅 Library Annual Day in: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "🎉 Library Annual Day is Here!";
    }
}, 1000);

function validateForm(event) {
    event.preventDefault();
    let isValid = true;

    const username = document.getElementById('username');
    const usernameError = document.getElementById('usernameError');
    if (username.value.length < 3) {
        usernameError.style.display = 'block';
        isValid = false;
    } else {
        usernameError.style.display = 'none';
    }

    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    const password = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');
    if (password.value.length < 6) {
        passwordError.style.display = 'block';
        isValid = false;
    } else {
        passwordError.style.display = 'none';
    }

    if (isValid) {
        alert('Registration successful!');
        document.getElementById('registrationForm').reset();
        showMainContent();
    }
    return isValid;
}
