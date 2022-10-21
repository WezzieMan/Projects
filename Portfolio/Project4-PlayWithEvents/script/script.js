/* ********** RANDOM COLOR ********** */
const randomColor = () => {
  let maxValue = 0XFFFFFE; // 16,777,214 NoWhite because of a control of mine
  let randomNumber = Math.random() * maxValue;
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);
  
  //The randomNumber could be less than 6 of length, so we add 0 starting from begin
  colorToReturn = randomNumber.padStart(6, 0); 
  
  return `#${colorToReturn.toUpperCase()}`
  //Shorthand: return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}

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
  cell.style.backgroundColor = randomColor();
  cell.style.color = cell.style.backgroundColor;
  
  //center text inside cells
  cell.style.display = "flex";
  cell.style.flexDirection = "row";
  cell.style.alignItems = "center";
  
  console.log(cell.style); //for testing
  cell.innerText = "Press 'C' key for a surprise";
  
  const cellsBackground = cell.style.backgroundColor;
  console.log(`The inital random Hex code color for ${cell.classList}: ${randomColor()}`)

  cell.addEventListener("mouseenter", () => {
    cell.style.outline = "3px dashed red";
  });
  cell.addEventListener("mouseleave", () => {
    cell.style.outline = ""
  });
  cell.addEventListener("click", () => {
    if(cell.style.backgroundColor != "white"){
      cell.style.backgroundColor = "white"
    }else {
      cell.style.backgroundColor = randomColor();
      cell.style.color = cell.style.backgroundColor;
    }
  })
});

/* ********** EVENTS FOR BUTTON ********** */
const btn = document.querySelector(".confirmBtn")

btn.addEventListener("click", () => {
  /*This reloads the page*/
  location.reload();
});

/* ********** EVENTS FOR MOUSE LOCATION ********** */
let posX = document.querySelector(".mouse-data .posX span")
let posY = document.querySelector(".mouse-data .posY span")

const mousePosition = (event) => {
  posX.innerText = event.pageX;
  posY.innerText = event.pageY;
};

window.addEventListener("mousemove", mousePosition);

/* ********** EVENTS FOR BACKGROUND COLOR ********** */
const body = document.body;

body.addEventListener("keypress", (event) => {
  //to save the current key pressed
  event.code;

  if(event.code === "KeyC") {
    body.style.backgroundColor === "" 
    ? body.style.backgroundColor = "#181818" 
    : body.style.backgroundColor === ""
  }
})