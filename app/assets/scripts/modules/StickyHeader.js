// import throttle from 'lodash/throttle'
// import debounce from 'lodash/debounce'

class StickyHeader {
    constructor() { 
      this.navLinks = document.querySelectorAll(".header__nav > a")
      this.menuIcon = document.querySelector(".header__menu-icon")  
      this.navEl = document.querySelector(".header__nav")
      this.headerEl = document.querySelector(".header")
      this.headerChildren = document.querySelector(".header > *")
      this.events()
  }

  events() {
    window.addEventListener("scroll", () =>  this.navOnScroll());
    this.navLinks.forEach(el => el.addEventListener("click", () => this.toggleNav()))
    this.menuIcon.addEventListener("click", () => this.toggleNav())
  }

  toggleNav() {
    this.navEl.classList.toggle("opened")
  }

  navOnScroll() {
    if (window.scrollY > this.headerEl.offsetHeight * 2) {
      this.headerEl.classList.add("smaller")
      this.headerChildren.classList.add("adjusted")
      this.headerEl.style.transition = "1s";    
    } else {    
      this.headerEl.classList.remove("smaller")     
      this.headerChildren.classList.remove("adjusted")
    }
  }


}

export default StickyHeader