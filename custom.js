function startLoading() {
    // Show loading animation
    document.querySelector('.loading').style.display = 'block';
    document.querySelector('.play-icon').style.display = 'none';  // Hide play icon

    // Set a timeout for the error message to appear after a certain time
    setTimeout(function () {
        document.querySelector('.loading').style.display = 'none'; // Hide loading animation
        document.querySelector('#error-message').style.display = 'block'; // Show error message
    }, 5000); // After 5 seconds
}
