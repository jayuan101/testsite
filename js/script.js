let currentIndex = 0;
let slideInterval;
let isVideoPlaying = false;

function showSlides() {
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[currentIndex].style.display = "block";
  dots[currentIndex].classList.add("active");
}

function changeSlide(n) {
  currentIndex += n;
  if (currentIndex >= document.getElementsByClassName("slide").length) currentIndex = 0;
  if (currentIndex < 0) currentIndex = document.getElementsByClassName("slide").length - 1;
  showSlides();
}

function currentSlide(n) {
  currentIndex = n - 1;
  showSlides();
}

function startSlideshow() {
  slideInterval = setInterval(() => {
    if (!isVideoPlaying) {
      currentIndex++;
      changeSlide(0);
    }
  }, 5000);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlides();
  startSlideshow();

  const videos = document.querySelectorAll(".slideshow-video");
  videos.forEach(video => {
    video.addEventListener("play", () => {
      isVideoPlaying = true;
    });
    video.addEventListener("pause", () => {
      isVideoPlaying = false;
    });
    video.addEventListener("ended", () => {
      isVideoPlaying = false;
    });
  });
});

function updatePrice() {
  const rentalDays = document.getElementById("rental-days").value;
  let priceMap = { '1': 299, '2': 579, '3': 849, '5': 1399 };
  document.getElementById("rental-price").innerText = `Price: $${priceMap[rentalDays]}/day`;
}

function addToCart() {
  const rentalDays = document.getElementById("rental-days").value;
  let priceMap = { '1': 299, '2': 579, '3': 849, '5': 1399 };
  const cartItem = { rentalDays, rentalPrice: priceMap[rentalDays] };
  localStorage.setItem("cartItem", JSON.stringify(cartItem));
  window.location.href = "checkout.html";
}
