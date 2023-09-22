function login() {
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');
    const invalidError = document.getElementById('invalidError'); // New error message element

    // Reset any previous error styles
    username.classList.remove('error-border');
    password.classList.remove('error-border');
    usernameError.textContent = '';
    passwordError.textContent = '';
    invalidError.textContent = ''; // Clear any previous error message

    // Check the username and password
    if (username.value === 'emil' && password.value === '1234') {
        alert('Login successful!');
        window.location.href = 'travelrequest.html';
    } else if (username.value === 'admin' && password.value === '12345') {
        alert('Login successful!');
        window.location.href = 'viewadmin.html';
    } else {
        // Invalid credentials
        if (username.value === '') {
            // Username is empty
            username.classList.add('error-border');
            usernameError.textContent = 'Username is required.';
        }

        if (password.value === '') {
            // Password is empty
            password.classList.add('error-border');
            passwordError.textContent = 'Password is required.';
        } else {
            // Invalid password
            password.classList.add('error-border');
            invalidError.textContent = 'Invalid username or password.'; // Display the error message
        }
    }
}
