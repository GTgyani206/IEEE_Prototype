const drkMd = document.querySelector(".drk-md");
const html = document.querySelector("html");
const icns = document.querySelectorAll(".icn-btn");
const ftrTxt = document.querySelector(".footer");

drkMd.addEventListener("click", () => {
  if (drkMd.className === "btn btn-outline-dark drk-md") {
    html.setAttribute("data-bs-theme", "dark");
    for (icn of icns) {
      icn.className = "btn btn-outline-light icn-btn";
    }
    drkMd.className = "btn btn-outline-light drk-md";
    drkMd.innerHTML = 'Light Mode <i class="bi bi-brightness-high-fill"></i>';
    ftrTxt.style.backgroundColor = "rgba(40, 40, 40, 0.1)";
  } else {
    html.setAttribute("data-bs-theme", "light");
    for (icn of icns) {
      icn.className = "btn btn-outline-dark icn-btn";
    }
    drkMd.className = "btn btn-outline-dark drk-md";
    drkMd.innerHTML = 'Dark Mode <i class="bi bi-moon-stars-fill"></i>';
    ftrTxt.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
  }
});

function scrollToElement(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
