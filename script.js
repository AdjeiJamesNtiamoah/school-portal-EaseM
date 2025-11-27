document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple hardcoded credentials for demonstration
    const validUsername = 'student';
    const validPassword = 'password123';

    if (username === validUsername && password === validPassword) {
        alert('Login successful!');
        // Redirect to another page or dashboard
        // window.location.href = 'dashboard.html'; // Uncomment to redirect
    } else {
        document.getElementById('error-message').textContent = 'Invalid username or password.';
    }
});
