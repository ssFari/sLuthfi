// btn-navbar

const btnNav = document.querySelector(".navbar-btn");
const navMenu = document.querySelector("#navMenu");
const iconNav = document.querySelector("#icon");

btnNav.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  iconNav.classList.toggle("fa-xmark");
});

navbar;

window.onscroll = () => {
  scrollNavbar();
};

scrollNavbar = () => {
  const navBar = document.getElementById("navbar");
  const navMenu = document.querySelectorAll("#navMenu .nav-link");

  if (document.documentElement.scrollTop > 30) {
    navBar.classList.add("navbar-colored");
  } else {
    navBar.classList.remove("navbar-colored");
  }
};

const secAll = document.querySelectorAll("section[id]");
window.addEventListener("scroll", () => {
  const scrY = window.pageYOffset;
  secAll.forEach((current) => {
    const secHeight = current.offsetHeight;
    const secTop = current.offsetTop - 200;
    const secId = current.getAttribute("id");

    if (scrY > secTop && scrY <= secTop + secHeight) {
      document
        .querySelector('li a[href*="' + secId + '"]')
        .classList.add("active");
    } else {
      document
        .querySelector('li a[href*="' + secId + '"]')
        .classList.remove("active");
    }
  });
});

// text aniation

// const text = document.querySelector("#title");

// const textLoad = () => {
//   setTimeout(() => {
//     text.textContent = "Safari Luthfi"
//   }, 0);
//   setTimeout(() => {
//     text.textContent = "Web Development"
//   }, 5100);
//   setTimeout(() => {
//     text.textContent = "UI/UX Design"
//   }, 10000);
// }

// const type = () => {
//   text.innerHTML
//   +=textLoad().charAt(i);
//   i++;
// }

// type()
// setInterval(textLoad, 15000)
const text = document.querySelector("#title");
const textLoad = ["Safari Luthfi. ", "Web Development. ", "UI/UX Design. "];
let i = 0;
let j = 0;
let currentPharase = [];
let isDelete = false;
let isEnd = false;

function loop() {
  isEnd = false;
  text.innerHTML = currentPharase.join('');

  if (i < textLoad.length) {
    if (!isDelete && j <= textLoad[i].length) {
      currentPharase.push(textLoad[i][j]);
      j++;
      text.innerHTML = currentPharase.join('');
    }
    if (isDelete && j <= textLoad[i].length) {
      currentPharase.pop(textLoad[i][j]);
      j--;
      text.innerHTML = currentPharase.join('');
    }

    if (j == textLoad[i].length ) {
      isDelete = true;
      isEnd = true;
    }

    if (isDelete && j === 0) {
      currentPharase = [];
      isDelete = false;
      i++
      if (i == textLoad.length) {
        i = 0
      }
    }
  }

const speedUp = Math.random() * (80 - 50) + 50;
const normalSpeed = Math.random() * (300-200) + 200;
const time = isEnd ? 2000 : isDelete ? speedUp : normalSpeed;

setTimeout(loop, time)

}

loop()
