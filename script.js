document.addEventListener("DOMContentLoaded", function() {
    const resume = document.getElementById("resume-container");

    function getDPI() {
        return window.devicePixelRatio * 96; // Most screens assume 96 DPI
    }

    function inchesToPixels(inches) {
        return inches * getDPI();
    }

    function applyMargins() {
        let margin = inchesToPixels(0.5); // 0.5-inch margin
        resume.style.position = "absolute";
        resume.style.top = margin + "px";
        resume.style.left = margin + "px";
        resume.style.right = margin + "px";
        resume.style.bottom = margin + "px";
        resume.style.width = `calc(100% - ${2 * margin}px)`;
        resume.style.height = `calc(100% - ${2 * margin}px)`;
    }

    applyMargins();
    window.addEventListener("resize", applyMargins);
});
