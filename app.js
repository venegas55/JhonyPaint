setGrid(16);
startPen();
function setGrid(resolution) {
  let area = resolution * resolution;
  for (let i = 1; i <= area; i++) {
    let pixel = document.createElement("div");
    pixel.setAttribute(
      "style",
      `border: 1px solid black;
      width: ${500 / resolution}px;
      height: ${500 / resolution}px;
      margin: -1px;
      background-color: white;`
    );
    let canvas = document.querySelector(".canvas");
    canvas.appendChild(pixel);
    pixel.setAttribute("class", "pixel");
  }
}

function startPen(type = "black") {
  let pixels = document.querySelectorAll(".pixel");
  switch (type) {
    case "black":
      pixels.forEach((pixel) => {
        pixel.addEventListener("mouseover", () => {
          i = 1;
          pixel.style.backgroundColor = `rgba(0, 0, 0, ${i})`;
          console.log(i);
        });
      });
      break;
    case "colors":
      pixels.forEach((pixel) => {
        pixel.addEventListener("mouseover", () => {
          let randomRed = Math.floor(Math.random() * 255);
          let randomGreen = Math.floor(Math.random() * 255);
          let randomBlue = Math.floor(Math.random() * 255);
          pixel.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
        });
      });
      break;
  }
}

function resetGrid() {
  let canvas = document.querySelector(".canvas");
  let pixels = document.querySelectorAll(".pixel");
  pixels.forEach((pixel) => {
    canvas.removeChild(pixel);
  });
}

let sizeButton = document.querySelector(".setSize");

sizeButton.addEventListener("click", () => {
  resolution = prompt("set resolution from 1 to 100");
  resetGrid();
  setGrid(resolution);
  startPen();
});

let resetButton = document.querySelector(".reset");

resetButton.addEventListener("click", () => {
  let pixels = document.querySelectorAll(".pixel");
  pixels.forEach((pixel) => {
    pixel.style.backgroundColor = "white";
  });
});

let rainbowButton = document.querySelector(".penRainbow");

rainbowButton.addEventListener("click", () => {
  startPen("colors");
});

let blackButton = document.querySelector(".penBlack");

blackButton.addEventListener("click", () => {
  startPen("black");
});
