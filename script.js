document.addEventListener("DOMContentLoaded", function() {
    const resume = document.getElementById("resume-container");

    function getDPI() {
        return window.devicePixelRatio * 96; // Standard assumption: 96 DPI
    }

    function inchesToPixels(inches) {
        return inches * getDPI();
    }

    function applyDynamicMargins() {
        let margin = inchesToPixels(0.5); // Convert 0.5 inches to pixels

        resume.style.position = "absolute";
        resume.style.width = `${window.innerWidth - 2 * margin}px`;
        resume.style.height = `${window.innerHeight - 2 * margin}px`;
        resume.style.left = `${margin}px`;
        resume.style.top = `${margin}px`;
    }

    applyDynamicMargins(); // Apply margins on page load
    window.addEventListener("resize", applyDynamicMargins); // Update on resize
});
