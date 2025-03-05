window.addEventListener("scroll", function () {
    let scrollValue = window.scrollY;
    let scaleFactor = Math.max(0.5, 1 - scrollValue / 1000); // مقدار بین 0.5 تا 1

    document.querySelectorAll(".circle").forEach(circle => {
        circle.style.transform = `scale(${scaleFactor})`;
    });
});