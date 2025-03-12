document.addEventListener("DOMContentLoaded", function() {
    const resume = document.getElementById("resume-container");

    function centerResume() {
        let screenWidth = window.innerWidth;
        let screenHeight = window.innerHeight;

        let width = screenWidth * (4 / 16);
        let height = screenHeight * (4 / 16);
        // 4/16 should now be 25% of all edges

        resume.style.width = width + "px";
        resume.style.height = height + "px";

        resume.style.left = (screenWidth - width) / 2 + "px";
        resume.style.top = (screenHeight - height) / 2 + "px";
    }

    centerResume();
    window.addEventListener("resize", centerResume);
});
