export function mobileMenu() {
  let block = document.querySelector('header .header-wrap');

  if (block) {
    let hamburger = block.querySelector(".hamburger");
    
    hamburger.addEventListener("click", function() {
      hamburger.classList.toggle("is-active");
      
    });
  }

}