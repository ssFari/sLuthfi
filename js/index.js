const observer =  new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting){
      entry.target.classList.add('show')
      observer.unobserve(entry.target);
    }else{
      entry.target.classList.remove('show')
    }
  });
});

  const hiddenElement = document.querySelectorAll('.hidden');
  hiddenElement.forEach((el) => observer.observe(el));


const btnNav = document.querySelector(".navbar-btn");
const navMenu = document.querySelector("#navMenu");
const iconNav = document.querySelector("#icon");

btnNav.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  iconNav.classList.toggle("fa-xmark");
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".navbar-btn, #navMenu")) {
    navMenu.classList.remove("active");
    iconNav.classList.remove("fa-xmark");
  }
});


document.addEventListener("DOMContentLoaded", function() {
  const scrollDownElements = document.querySelectorAll(".container");
  const secAll = document.querySelectorAll("section[id]");
  const navbar = document.getElementById("navbar");  // Tambahkan elemen navbar

  scrollDownElements.forEach((scrollDownElement) => {  // Tambahkan loop for
    scrollDownElement.addEventListener("scroll", () => {
      const scrY = scrollDownElement.scrollTop;
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
  });
});



// const secAll = document.querySelectorAll("section[id]");
// window.addEventListener("scroll", () => {
//   const scrY = window.pageYOffset;
//   secAll.forEach((current) => {
//     const secHeight = current.offsetHeight;
//     const secTop = current.offsetTop - 200;
//     const secId = current.getAttribute("id");

//     if (scrY > secTop && scrY <= secTop + secHeight) {
//       document
//         .querySelector('li a[href*="' + secId + '"]')
//         .classList.add("active");
//     } else {
//       document
//         .querySelector('li a[href*="' + secId + '"]')
//         .classList.remove("active");
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  // Kode Anda di sini
  const scrollDownElements = document.getElementsByClassName("container");

  function scrollNavbar(event) {
    const navBar = document.getElementById("navbar");

    if (event.target.scrollTop > 30) {
      navBar.classList.add("navbar-colored");
    } else {
      navBar.classList.remove("navbar-colored");
    }
  }

  for (let i = 0; i < scrollDownElements.length; i++) {
    scrollDownElements[i].addEventListener("scroll", scrollNavbar);
  }
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
  text.innerHTML = currentPharase.join("");

  if (i < textLoad.length) {
    if (!isDelete && j <= textLoad[i].length) {
      currentPharase.push(textLoad[i][j]);
      j++;
      text.innerHTML = currentPharase.join("");
    }
    if (isDelete && j <= textLoad[i].length) {
      currentPharase.pop(textLoad[i][j]);
      j--;
      text.innerHTML = currentPharase.join("");
    }

    if (j == textLoad[i].length) {
      isDelete = true;
      isEnd = true;
    }

    if (isDelete && j === 0) {
      currentPharase = [];
      isDelete = false;
      i++;
      if (i == textLoad.length) {
        i = 0;
      }
    }
  }

  const speedUp = Math.random() * (80 - 50) + 50;
  const normalSpeed = Math.random() * (300 - 200) + 200;
  const time = isEnd ? 2000 : isDelete ? speedUp : normalSpeed;

  setTimeout(loop, time);
}

loop();

/** 
 * ==============================================
 * skill
 * ==============================================
*/

document.addEventListener("DOMContentLoaded", function() {
  const barPersentase = document.getElementsByClassName("persentase-bar");
  for (let i = 0; i < barPersentase.length; i++) {
      const nilai = barPersentase[i].closest('.skill-data').querySelector(".nilai");
      barPersentase[i].style.width = nilai.textContent;
  }
});

/**================================================== */


const skillContent = document.getElementsByClassName("skill-content"),
        skillHeader = document.querySelectorAll(".skill-header")

function toggleSkills() {
    let item = this.parentNode;
    for (let i = 0; i < skillContent.length; i++) {
      if(skillContent[i] !== item) {
        skillContent[i].classList.remove('active');
        skillContent[i].classList.add('unactive');
      }
    }
    item.classList.toggle('active');
    item.classList.toggle('unactive');
}

skillHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills);
});



document.addEventListener("DOMContentLoaded", function() {

  const swiper = new Swiper('.content-swiper', {
    // Optional parameters
    autoplay: {
      delay: 5000,
    },
    speed: 1000,
    spaceBetween: 100,
    loop: true,
    effect: 'slide',
  
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    keyboard:true,
  });


});




/**Service */


document.addEventListener('DOMContentLoaded', function(){
  let currentPopup = null;
  const serviceInfo = document.querySelectorAll('.service-content .button'),
      popUp = document.querySelectorAll('.service-info-popup'),
      closePopup = document.querySelectorAll('.decs-title .fa-xmark-circle');

  serviceInfo.forEach(function(button, index) {
      button.addEventListener('click', function() {
          if (currentPopup !== null) {
              popUp[currentPopup].classList.remove("active");
          }
          currentPopup = index;
          popUp[index].classList.add("active");
      });
  });

  closePopup.forEach(function(button) {
      button.addEventListener('click', function() {
          this.parentNode.parentNode.classList.remove("active");
          currentPopup = null;
      });
  });

});
