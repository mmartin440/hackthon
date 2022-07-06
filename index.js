// On edge hit
$('.your-element').on('edge', function(event, slick, direction){
  console.log('edge was hit')
});
// On swipe event
$('.slide-container').on('swipe', function(event, slick, direction){
  console.log(direction);
  // left
});
// On before slide change
$('.slide-container').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  console.log(nextSlide);
});


$(document).ready(function(){

  $('.container-one').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    arrows: true,
    // prevArrow: '.arrow-prev',
  
  });

})

$('.container-two').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  centerMode: true,
   centerPadding: '40px',
});

// function popUp() {
//   var popup = document.getElementById("myPopup");
//   popup.classList.toggle("show");
// }

let $img = $('.img-box'); 
$img.on('click',() => {
// let $innerText = $('<p></p>'); 
$img.attr('src','ramenHis.jpeg'); 
// $innerText.text('this where the info about food history'); 
})



// $('.container-two').slick({
//   dots: true,
//   infinite: true,
//   speed: 500,
//   fade: true,
//   cssEase: 'linear'
// });
		
