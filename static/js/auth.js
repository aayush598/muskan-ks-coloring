document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Simple validation
    if (!validateEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    if (password.length < 6) {
        alert('Password must be at least 6 characters');
        return;
    }
    
    // Simulate login (replace with real auth)
    simulateLogin(email, password);
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function simulateLogin(email, password) {
    // In a real app, you would call your backend API here
    console.log('Login attempt with:', email, password);
    
    // Show loading state
    const btn = document.querySelector('.login-btn');
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Authenticating';
    btn.disabled = true;
    
    // Simulate API call delay
    setTimeout(() => {
        // For demo purposes - always succeed
        alert('Login successful! Redirecting...');
        window.location.href = 'dashboard.html'; // Create this page
        
        // In real implementation, check response:
        // if (response.success) {
        //     localStorage.setItem('token', response.token);
        //     window.location.href = 'dashboard.html';
        // } else {
        //     alert('Invalid credentials');
        //     btn.innerHTML = 'Login';
        //     btn.disabled = false;
        // }
    }, 1500);
}

// Toggle password visibility
document.querySelectorAll('.toggle-password').forEach(icon => {
    icon.addEventListener('click', function() {
        const input = this.parentElement.querySelector('input');
        if (input.type === 'password') {
            input.type = 'text';
            this.classList.replace('fa-eye', 'fa-eye-slash');
        } else {
            input.type = 'password';
            this.classList.replace('fa-eye-slash', 'fa-eye');
        }
    });
});