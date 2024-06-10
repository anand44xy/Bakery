// Add or Remove openMenu class
function toggleMenuBar() {
    document.body.classList.toggle('openMenu');   
}

/* nav become sticky on top after scrolling 60 */
window.addEventListener(
    "scroll",
    function(e){
        // console.log(this.window.scrollY);
        if (this.scrollY >= 60) {
            this.document.body.classList.add('sticky-nav');
        }else{
            this.document.body.classList.remove('sticky-nav');
        }
    }
);

  // Review Section slick-Slider
  $(document).ready(function(){
    // console.log('Initializing Slick Slider');
    $('.review-slider').slick({
        arrows: true,
        infinte:true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1000,
        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>'
    });
});



