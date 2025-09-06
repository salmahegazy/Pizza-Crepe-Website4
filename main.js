// JavaScript to show button only at the bottom
const topBtn = document.querySelector(".top");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const docHeight = document.body.scrollHeight;

  // Show button only when user is near the bottom
  if (scrollTop + windowHeight >= docHeight - 20) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }
});
