// import throttle from 'lodash/throttle'
// import debounce from 'lodash/debounce'

class StickyHeader {
  constructor() {
    this.events()
  }

  events() {
    const navEl = document.querySelector(".header__nav");
    const menuIcon = document.querySelector(".header__menu-icon");   
    const navLinks = document.querySelectorAll(".opened > a");

    menuIcon.onclick = () => navEl.classList.toggle("opened"); 

    navLinks.forEach(addEventListener("click", closeNav));
    function closeNav(e) {
      e.target.parentNode.classList.remove("opened");
    }

    // window.addEventListener("scroll", ()=> {});
  }

  


}

export default StickyHeader