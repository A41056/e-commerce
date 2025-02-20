document.addEventListener("DOMContentLoaded", function () {
  const colors = [
    "#00c12b",
    "#f50606",
    "#f5dd06",
    "#f57906",
    "#06caf5",
    "#063af5",
    "#7d06f5",
    "#f506a4",
    "#ffffff",
    "#000000",
  ];

  const gridContainer = document.querySelector(".filter-by-color-grid");

  colors.forEach((color, index) => {
    const colorCircle = document.createElement("div");
    colorCircle.classList.add("color-circle");
    colorCircle.style.backgroundColor = color;

    const checkMark = document.createElement("img");
    checkMark.src = "./images/choose-tick.png";
    checkMark.classList.add("check-mark");
    checkMark.style.display = "none";

    colorCircle.appendChild(checkMark);
    gridContainer.appendChild(colorCircle);

    colorCircle.addEventListener("click", function () {
      document.querySelectorAll(".color-circle").forEach((circle) => {
        circle.classList.remove("selected");
        circle.querySelector(".check-mark").style.display = "none";
      });

      colorCircle.classList.add("selected");
      checkMark.style.display = "block";
    });
  });

  const sizeItems = document.querySelectorAll(".size-item");

  sizeItems.forEach((item) => {
    item.addEventListener("click", function () {
      sizeItems.forEach((el) => el.classList.remove("selected"));

      item.classList.add("selected");
    });
  });
});
