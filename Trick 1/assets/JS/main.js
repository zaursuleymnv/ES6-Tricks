let navSection = document.querySelector('#navbar-header-section')
let navBar = navSection.querySelector('.navbar-header');
let scrollTopButton = navSection.querySelector('.scroll-up-btn');


let onScroll = (event) => {
  let scrollPosition = event.target.scrollingElement.scrollTop;

  scrollTopButton.classList.toggle("visible", scrollPosition > 0);
  navBar.classList.toggle("scrolled", scrollPosition > 0);

};

const scrollToTop = () => {
    window.scrollTo(
        { 
            top: 0, 
            behavior: "smooth" 
        }
    );
};
  
document.addEventListener("scroll", onScroll);
scrollTopButton.addEventListener('click', scrollToTop)

