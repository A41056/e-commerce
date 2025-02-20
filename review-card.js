document.addEventListener("DOMContentLoaded", function () {
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

    return ratingContainer;
  }

  function createReviewCard(review) {
    const reviewCard = document.createElement("div");
    reviewCard.classList.add("review-card-1");

    const ratingContainer = document.createElement("div");
    ratingContainer.classList.add("rating-container");

    const ratingElement = createRating(review.rating);
    ratingContainer.appendChild(ratingElement);

    const menuButton = document.createElement("button");
    menuButton.classList.add("menu-button");

    const menuIcon = document.createElement("img");
    menuIcon.src = "./images/three-dots.png";
    menuIcon.alt = "menu";
    menuButton.appendChild(menuIcon);

    ratingContainer.appendChild(menuButton);
    reviewCard.appendChild(ratingContainer);

    const reviewerInfo = document.createElement("p");
    reviewerInfo.classList.add("reviewer");

    const reviewerName = document.createElement("strong");
    reviewerName.textContent = review.reviewer;
    reviewerInfo.appendChild(reviewerName);

    if (review.verified) {
      const verifiedIcon = document.createElement("img");
      verifiedIcon.classList.add("verified");
      verifiedIcon.src = "./images/verified.png";
      verifiedIcon.alt = "verified";
      reviewerInfo.appendChild(verifiedIcon);
    }

    reviewCard.appendChild(reviewerInfo);

    const reviewText = document.createElement("p");
    reviewText.classList.add("review-text");
    reviewText.textContent = `"${review.text}"`;
    reviewCard.appendChild(reviewText);

    const postedDate = document.createElement("p");
    postedDate.classList.add("posted-date");
    postedDate.textContent = `Posted on ${review.date}`;
    reviewCard.appendChild(postedDate);

    return reviewCard;
  }

  const sampleReview = [
    {
      rating: 4.5,
      reviewer: "Samantha D.",
      verified: true,
      text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
      date: "August 14, 2023",
    },
    {
      rating: 4,
      reviewer: "Alex M.",
      verified: true,
      text: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
      date: "August 15, 2023",
    },
    {
      rating: 3.5,
      reviewer: "Ethan R.",
      verified: true,
      text: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
      date: "August 16, 2023",
    },
    {
      rating: 4,
      reviewer: "Olivia P.",
      verified: true,
      text: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
      date: "August 17, 2023",
    },
    {
      rating: 4,
      reviewer: "Liam K.",
      verified: true,
      text: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
      date: "August 18, 2023",
    },
    {
      rating: 4.5,
      reviewer: "Ava H.",
      verified: true,
      text: "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
      date: "August 19, 2023",
    },
  ];

  const reviewsContainer = document.getElementById("reviews-container");
  console.log(reviewsContainer);

  sampleReview.forEach((review) => {
    reviewsContainer.appendChild(createReviewCard(review));
  });
});
