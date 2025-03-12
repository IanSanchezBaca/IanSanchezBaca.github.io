// Function to detect if the browser is on a phone or desktop
function detectDeviceMode() {
    const width = window.innerWidth;

    // Assuming phone mode is when the width is <= 768px (common mobile breakpoint)
    if (width <= 768) {
        console.log("You are in phone mode!");
        // Change styles or logic for phone mode
        document.body.style.backgroundColor = "#f0f8ff"; // Light blue background for phone
        document.getElementById('content').style.fontSize = "14px"; // Smaller font size for mobile
    } else {
        console.log("You are in computer mode!");
        // Change styles or logic for computer mode
        document.body.style.backgroundColor = "#ffffff"; // White background for desktop
        document.getElementById('content').style.fontSize = "18px"; // Larger font size for desktop
    }
}

// Check device mode on page load
document.addEventListener("DOMContentLoaded", function() {
    detectDeviceMode();
});

// Recheck device mode when the window is resized
window.addEventListener("resize", function() {
    detectDeviceMode();
});
