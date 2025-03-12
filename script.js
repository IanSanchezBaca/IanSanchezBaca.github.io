document.addEventListener("DOMContentLoaded", function() {
    const resume = document.getElementById("resume-container");

    function centerResume() {
        let screenWidth = window.innerWidth;
        let screenHeight = window.innerHeight;

        let width = screenWidth * (8 / 16); // 50% of width (4/16 from each side)
        let height = screenHeight * (8 / 16); // 50% of height (4/16 from each side)

        resume.style.width = width + "px";
        resume.style.height = height + "px";

        resume.style.left = (screenWidth - width) / 2 + "px";
        resume.style.top = (screenHeight - height) / 2 + "px";
    }

    centerResume();
    window.addEventListener("resize", centerResume);
});
