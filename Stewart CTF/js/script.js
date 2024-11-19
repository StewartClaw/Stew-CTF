document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    
    // Check credentials
    if (username === 'admin_user' && password === 'SQLin3ct!0n') {
        window.location.href = '/success/';
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
});