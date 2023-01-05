// btn-navbar

const btnNav = document.querySelector(".navbar-btn");
const navMenu = document.querySelector("#navMenu");
const iconNav = document.querySelector("#icon")

btnNav.addEventListener("click", ()=> {
  navMenu.classList.toggle("active")
  iconNav.classList.toggle("fa-xmark")
})

navbar


window.onscroll = () => {scrollNavbar()}

scrollNavbar = () => {
  const navBar = document.getElementById("navbar");
  const navMenu = document.querySelectorAll("#navMenu .nav-link");

  if (document.documentElement.scrollTop > 30) {
    navBar.classList.add("navbar-colored")

    
  }else{
    navBar.classList.remove("navbar-colored")
  }
  
} 

const secAll = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrY = window.pageYOffset;
  secAll.forEach((current) => {
    const secHeight = current.offsetHeight;
    const secTop = current.offsetTop - 200;
    const secId = current.getAttribute('id');
  
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
