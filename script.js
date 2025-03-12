document.addEventListener("DOMContentLoaded", function() {
    const resume = document.getElementById("resume-container");

    function getDPI() {
        return window.devicePixelRatio * 96; // Most screens assume 96 DPI by default
    }

    function inchesToPixels(inches) {
        return inches * getDPI();
    }

    function centerResume() {
        let screenWidth = window.innerWidth;
        let screenHeight = window.innerHeight;

        let marginInInches = 4; // 4 inches from each side
        let width = screenWidth - 2 * inchesToPixels(marginInInches);
        let height = screenHeight - 2 * inchesToPixels(marginInInches);

        resume.style.width = width + "px";
        resume.style.height = height + "px";
        resume.style.left = (screenWidth - width) / 2 + "px";
        resume.style.top = (screenHeight - height) / 2 + "px";
    }

    centerResume();
    window.addEventListener("resize", centerResume);
});
