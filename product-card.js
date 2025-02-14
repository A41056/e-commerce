document.addEventListener("DOMContentLoaded", function () {
  const products = {
    newArrivals: [
      {
        img: "./images/new_arrivals_1.png",
        name: "T-SHIRT WITH TAPE DETAILS",
        rating: 4.5,
        price: "$120",
      },
      {
        img: "./images/new_arrivals_2.png",
        name: "SKINNY FIT JEANS",
        rating: 3.5,
        price: "$240",
        originalPrice: "$260",
        discountPercent: "20%",
      },
      {
        img: "./images/new_arrivals_3.png",
        name: "CHECKERED SHIRT",
        rating: 4.5,
        price: "$180",
      },
      {
        img: "./images/new_arrivals_4.png",
        name: "SLEEVE STRIPED T-SHIRT",
        rating: 4.5,
        price: "$130",
        originalPrice: "$160",
        discountPercent: "30%",
      },
    ],
    topSelling: [
      {
        img: "./images/top_selling_1.png",
        name: "VERTICAL STRIPED SHIRT",
        rating: 5.0,
        price: "$232",
        originalPrice: "$212",
        discountPercent: "20%",
      },
      {
        img: "./images/top_selling_2.png",
        name: "COURAGE GRAPHIC T-SHIRT",
        rating: 4.0,
        price: "$145",
      },
      {
        img: "./images/top_selling_3.png",
        name: "LOOSE FIT BERMUDA SHORTS",
        rating: 3.0,
        price: "$80",
      },
      {
        img: "./images/top_selling_4.png",
        name: "FADED SKINNY JEANS",
        rating: 4.5,
        price: "$210",
      },
    ],
  };

  function createProductCard(product) {
    const card = document.createElement("div");
    card.classList.add("product-card");

    // Ảnh sản phẩm
    const img = document.createElement("img");
    img.src = product.img;
    img.alt = product.name;
    card.appendChild(img);

    // Tên sản phẩm
    const name = document.createElement("p");
    name.textContent = product.name;
    card.appendChild(name);

    // Đánh giá (số sao + điểm số)
    const ratingContainer = document.createElement("div");
    ratingContainer.classList.add("product-rating");

    for (let i = 0; i < 5; i++) {
      const star = document.createElement("img");
      star.src =
        i < Math.floor(product.rating)
          ? "./images/star-filled.png"
          : "./images/star-empty.png";
      ratingContainer.appendChild(star);
    }

    const ratingText = document.createElement("span");
    ratingText.textContent = `${product.rating} / 5`;
    ratingContainer.appendChild(ratingText);

    card.appendChild(ratingContainer);

    // Giá sản phẩm
    const priceContainer = document.createElement("div");
    priceContainer.classList.add("product-pricing");

    // Giá sau giảm
    const discountPrice = document.createElement("span");
    discountPrice.classList.add("discount-price");
    discountPrice.textContent = product.price;
    priceContainer.appendChild(discountPrice);

    // Chỉ hiển thị giá gốc và phần trăm giảm giá nếu có giảm giá
    if (product.originalPrice && product.discountPercent) {
      const originalPrice = document.createElement("span");
      originalPrice.classList.add("original-price");
      originalPrice.textContent = product.originalPrice;

      const discountPercent = document.createElement("span");
      discountPercent.classList.add("discount-percent");
      discountPercent.textContent = `-${product.discountPercent}`;

      priceContainer.appendChild(originalPrice);
      priceContainer.appendChild(discountPercent);
    }

    card.appendChild(priceContainer);

    return card;
  }

  function renderProducts(category, containerId) {
    const container = document.getElementById(containerId);
    products[category].forEach((product) => {
      const productCard = createProductCard(product);
      container.appendChild(productCard);
    });
  }

  renderProducts("newArrivals", "new-arrivals");
  renderProducts("topSelling", "top-selling");
});
