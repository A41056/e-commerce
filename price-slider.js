document.addEventListener("DOMContentLoaded", function () {
  const minRange = document.getElementById("minRange");
  const maxRange = document.getElementById("maxRange");
  const minPrice = document.getElementById("minPrice");
  const maxPrice = document.getElementById("maxPrice");
  const progress = document.querySelector(".progress");

  function updateSlider() {
    let minValue = parseInt(minRange.value);
    let maxValue = parseInt(maxRange.value);

    if (maxValue - minValue < 20) {
      if (event.target === minRange) {
        minRange.value = maxValue - 20;
      } else {
        maxRange.value = minValue + 20;
      }
    }

    minPrice.textContent = `$${minRange.value}`;
    maxPrice.textContent = `$${maxRange.value}`;

    let percentMin = (minRange.value / minRange.max) * 100;
    let percentMax = (maxRange.value / maxRange.max) * 100;

    progress.style.left = percentMin + "%";
    progress.style.right = 100 - percentMax + "%";
  }

  minRange.addEventListener("input", updateSlider);
  maxRange.addEventListener("input", updateSlider);

  updateSlider();
});
