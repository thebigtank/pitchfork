export function mobileMenu() {
  let block = document.querySelector('header .header-wrap');

  if (block) {
    let hamburger = block.querySelector(".hamburger");
    // On click
    hamburger.addEventListener("click", function() {
      // Toggle class "is-active"
      hamburger.classList.toggle("is-active");
      // Do something else, like open/close menu
    });
  }

}