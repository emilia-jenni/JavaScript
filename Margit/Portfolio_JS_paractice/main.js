let header = document.querySelector("header");
let buttonBackToTop = document.getElementById("backToTop");
let buttonMobile = document.getElementById("mobileButton");
let nav = document.querySelector("nav");
let links = document.querySelectorAll("nav ul li a");

window.onscroll = function () {
  headerFunction();
};

const headerFunction = () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    header.classList.add("bg");
  } else {
    header.classList.remove("bg");
  }
};

window.onscroll = function () {
  scrollFunction();
};

const scrollFunction = () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    buttonBackToTop.style.display = "block";
  } else {
    buttonBackToTop.style.display = "none";
  }
};

const getToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

const mobMenu = () => {
  nav.classList.toggle("responsive");
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", mobMenu);
  }
};

buttonBackToTop.addEventListener("click", getToTop);
buttonMobile.addEventListener("click", mobMenu);

/*function headerFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    header.style.backgroundColor = "#2424248e";
    header.style.color = "#fff";
    /* to shrink:
    header.style.padding = 1rem;*/
/*} else {
    header.style.backgroundColor = "transparent";
    header.style.color = "#000";
    /* to shrink:
    header.style.padding = 2rem;*/
/* }
}*/
