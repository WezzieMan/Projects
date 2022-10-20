/* ********** EVENTS FOR THE CONTAINER ********** */
const gridContainer = document.querySelector(".grid-container");

gridContainer.addEventListener("mouseenter", () => {
    gridContainer.style.outline = "6px solid red";
});
gridContainer.addEventListener("mouseleave", () => {
    gridContainer.style.outline = "";
});

/* ********** EVENTS FOR ELEMENTS INSIDE CONTAINER ********** */
const cells = document.querySelectorAll(".cell");

cells.forEach(cell => {
  const cellsBackground = cell.style.backgroundColor;

  cell.addEventListener("mouseenter", () => {
    cell.style.outline = "3px dashed red";
  });
  cell.addEventListener("mouseleave", () => {
    cell.style.outline = ""
  });
  cell.addEventListener("click", () => {
    cell.style.backgroundColor != "white" ? 
    cell.style.backgroundColor = "white" : 
    cell.style.backgroundColor = cellsBackground;
  })
});

/* ********** EVENTS FOR BUTTON ********** */
const btn = document.querySelector(".confirmBtn")

btn.addEventListener("click", () => {
  /*This reloads the page*/
  location.reload();
});