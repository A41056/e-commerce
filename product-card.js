document.addEventListener("DOMContentLoaded", function () {
  const products = {
    newArrivals: [
      {
        img: "./images/new_arrivals_1.png",
        name: "T-SHIRT WITH TAPE DETAILS",
        rating: 4.5,
        price: "120",
      },
      {
        img: "./images/new_arrivals_2.png",
        name: "SKINNY FIT JEANS",
        rating: 3.5,
        price: "240",
        originalPrice: "260",
        discountPercent: "20",
      },
      {
        img: "./images/new_arrivals_3.png",
        name: "CHECKERED SHIRT",
        rating: 4.5,
        price: "180",
      },
      {
        img: "./images/new_arrivals_4.png",
        name: "SLEEVE STRIPED T-SHIRT",
        rating: 4.5,
        price: "130",
        originalPrice: "160",
        discountPercent: "30",
      },
    ],
    topSelling: [
      {
        img: "./images/top_selling_1.png",
        name: "VERTICAL STRIPED SHIRT",
        rating: 5.0,
        price: "212",
        originalPrice: "232",
        discountPercent: "20",
      },
      {
        img: "./images/top_selling_2.png",
        name: "COURAGE GRAPHIC T-SHIRT",
        rating: 4.0,
        price: "145",
      },
      {
        img: "./images/top_selling_3.png",
        name: "LOOSE FIT BERMUDA SHORTS",
        rating: 3.0,
        price: "80",
      },
      {
        img: "./images/top_selling_4.png",
        name: "FADED SKINNY JEANS",
        rating: 4.5,
        price: "210",
      },
    ],
    detailDemo: [
      {
        name: "One Life Graphic T-shirt",
        rating: 4.5,
        price: "260",
        originalPrice: "300",
        discountPercent: "40",
      },
    ],
  };
  function createProductCard(product) {
    const card = document.createElement("div");
    card.classList.add("product-card");

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("product-image");

    const img = document.createElement("img");
    img.src = product.img;
    img.alt = product.name;

    imgContainer.appendChild(img);
    card.appendChild(imgContainer);

    const name = document.createElement("p");
    name.classList.add("product-name");
    name.textContent = product.name;
    card.appendChild(name);

    const ratingElement = createRating(product.rating);
    card.appendChild(ratingElement);

    const priceElement = createPricing(
      product.price,
      product.originalPrice,
      product.discountPercent
    );
    card.appendChild(priceElement);

    return card;
  }

  function createRating(rating) {
    const ratingContainer = document.createElement("div");
    ratingContainer.classList.add("product-rating");

    const starsContainer = document.createElement("div");
    starsContainer.classList.add("stars");

    let hasStar = false;

    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(rating)) {
        const star = document.createElement("img");
        star.src = "./images/star.png";
        star.alt = "full star";
        starsContainer.appendChild(star);
        hasStar = true;
      } else if (i === Math.floor(rating) && rating % 1 !== 0) {
        const star = document.createElement("img");
        star.src = "./images/half-star.png";
        star.alt = "half star";
        starsContainer.appendChild(star);
        hasStar = true;
      }
    }

    if (hasStar) {
      ratingContainer.appendChild(starsContainer);
    }

    const ratingText = document.createElement("span");
    ratingText.textContent = `${rating} / 5`;
    ratingContainer.appendChild(ratingText);

    return ratingContainer;
  }

  function createPricing(price, originalPrice, discountPercent) {
    const priceContainer = document.createElement("div");
    priceContainer.classList.add("product-pricing");

    const discountPrice = document.createElement("span");
    discountPrice.classList.add("discount-price");
    discountPrice.textContent = `$${price}`;
    priceContainer.appendChild(discountPrice);

    if (originalPrice && discountPercent) {
      const originalPriceElement = document.createElement("span");
      originalPriceElement.classList.add("original-price");
      originalPriceElement.textContent = `$${originalPrice}`;

      const discountWrapper = document.createElement("div");
      discountWrapper.classList.add("discount-wrapper");

      const discountPercentElement = document.createElement("span");
      discountPercentElement.classList.add("discount-percent");
      discountPercentElement.textContent = `-${discountPercent}%`;

      discountWrapper.appendChild(discountPercentElement);

      priceContainer.appendChild(originalPriceElement);
      priceContainer.appendChild(discountWrapper);
    }

    return priceContainer;
  }

  function renderProducts(category, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    products[category].forEach((product) => {
      const productCard = createProductCard(product);
      container.appendChild(productCard);
    });
  }

  function renderProductDetail(product, containerSelector) {
    const container = document.querySelector(containerSelector);
    console.log(container);

    if (!container) return;

    const titleElement = container.querySelector(".title");
    if (titleElement) {
      titleElement.textContent = product.name;
    }

    const ratingContainer = container.querySelector(".rating");
    if (ratingContainer) {
      ratingContainer.appendChild(createRating(product.rating));
    }

    const priceContainer = container.querySelector(".price");
    if (priceContainer) {
      priceContainer.appendChild(
        createPricing(
          product.price,
          product.originalPrice,
          product.discountPercent
        )
      );
    }
  }

  renderProducts("newArrivals", "new-arrivals");
  renderProducts("topSelling", "top-selling");
  renderProductDetail(products.detailDemo[0], ".product-detail");

  const sizeOptions = document.querySelectorAll(".sizes div");

  sizeOptions.forEach((size) => {
    size.addEventListener("click", function () {
      sizeOptions.forEach((s) => s.classList.remove("active"));

      this.classList.add("active");
    });
  });

  const buttons = document.querySelectorAll(".tab-button");
  const panels = document.querySelectorAll(".tab-panel");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => btn.classList.remove("active"));
      panels.forEach((panel) => panel.classList.remove("active"));

      button.classList.add("active");
      document.getElementById(button.dataset.tab).classList.add("active");
    });
  });
});
