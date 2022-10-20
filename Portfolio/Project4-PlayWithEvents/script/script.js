const gridContainer = document.querySelector(".grid-container");

gridContainer.addEventListener("mouseenter", () => {
    gridContainer.style.outline = "6px solid red";
});

gridContainer.addEventListener("mouseleave", () => {
    gridContainer.style.outline = "";
});