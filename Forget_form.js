let timer;
let timeLeft = 15;

// Function to submit OTP
function submitOTP() {
    let otpValue = document.getElementById('otp').value;
    if (otpValue.trim() === '') {
        alert('Please enter OTP');
        return;
    }
    // Here you can add further logic for OTP validation and password reset
    alert('OTP submitted successfully!');
    clearInterval(timer); // Clear the timer when OTP is submitted
}

// Function to resend OTP
function resendOTP() {
    alert('OTP resent successfully!');
    startTimer(); // Restart the timer when OTP is resent
}

// Function to start countdown timer
function startTimer() {
    timeLeft = 15;
    updateTimer();
    timer = setInterval(updateTimer, 1000);
}

// Function to update timer display
function updateTimer() {
    document.getElementById('otpTimer').innerText = `Time remaining: ${timeLeft} seconds`;
    timeLeft--;
    if (timeLeft < 0) {
        clearInterval(timer);
        document.getElementById('otpTimer').innerText = 'Time expired';
        document.getElementById('resendOTP').style.display = 'block'; // Show resend option
    }
}

// Event listeners for buttons
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.login-btn[type="button"]').addEventListener('click', function() {
        submitOTP();
        startTimer(); // Start timer when Submit OTP button is clicked
    });

    document.querySelectorAll('.login-btn')[1].addEventListener('click', function() {
        resendOTP();
        startTimer(); // Restart timer when Resend OTP button is clicked
    }); // Assuming Resend OTP button is the second one
});
