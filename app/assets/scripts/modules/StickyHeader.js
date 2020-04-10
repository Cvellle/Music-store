import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'

class StickyHeader {
  constructor() {
    this.events()
  }

  events() {
    const navEl = document.querySelector(".header__nav");
    const menuIcon = document.querySelector(".header__menu-icon");
    
    menuIcon.onclick = () => navEl.classList.toggle("opened");
    
  }


}

export default StickyHeader